import { useState, useEffect, useRef } from "react";
import { searchBooks, type BookSearchResult } from "../../services/googleBooks";
import ActionsRow from "./ActionsRow";
import InputRow from "./InputRow";
import type { Book } from "../../types";
import { BookCard } from "../BookCard";

function mapSearchResultToBook(result: BookSearchResult): Book {
  return {
    id: result.id,
    title: result.title,
    authors: result.authors,
    thumbnail: result.thumbnail,
    publishedYear: result.publishedYear,
    pageCount: result.pageCount,
    source: "google",
    createdAt: Date.now(),
  };
}

interface AddBookComposerProps {
  onAddManual: (title: string) => void;
  onAddFromSearch?: (data: {
    id: string;
    title: string;
    authors: string[];
    thumbnail?: string;
    publishedYear?: number;
    pageCount?: number;
  }) => void;
  onClose: () => void;
}

function AddBookComposer(props: AddBookComposerProps) {
  const { onAddManual, onClose } = props;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BookSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const add = () => {
    const title = query.trim();
    if (title) onAddManual(title);
    onClose();
  };

  // focus input when composer opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [onClose]);

  // debounced search as user types
  useEffect(() => {
    const trimmed = query.trim();

    // if empty, clear results and skip fetch
    if (!trimmed) {
      setResults([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const timeoutId = window.setTimeout(async () => {
      try {
        setLoading(true);
        const data = await searchBooks(trimmed, controller.signal);
        setResults(data);
      } catch {
        // ignore abort error
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  const handleSelectResult = (result: BookSearchResult) => {
    if (props.onAddFromSearch) {
      props.onAddFromSearch({
        id: result.id,
        title: result.title,
        authors: result.authors,
        thumbnail: result.thumbnail,
        publishedYear: result.publishedYear,
        pageCount: result.pageCount,
      });
    } else {
      onAddManual(result.title);
    }

    onClose();
  };

  return (
    <div ref={containerRef}>
      <InputRow
        query={query}
        setQuery={setQuery}
        inputRef={inputRef}
        onClose={onClose}
        onConfirm={add}
      />

      {loading && <div className="m-2 p-1 text-sm">Searching…</div>}

      <ActionsRow onAdd={add} onCancel={onClose} />

      {!loading && results.length > 0 && (
        <div className="m-2">
          {results.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => handleSelectResult(r)}
              className="w-full text-left"
            >
              <BookCard book={mapSearchResultToBook(r)} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddBookComposer;
