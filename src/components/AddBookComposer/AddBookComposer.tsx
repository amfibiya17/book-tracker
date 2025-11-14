import { useState, useEffect, useRef } from "react";
import { searchBooks, type BookSearchResult } from "../../services/googleBooks";

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
      {/* Input row */}
      <div className="m-2 border border-black rounded-md">
        <input
          ref={inputRef}
          placeholder="Type a book title…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "Enter") add();
          }}
          className="w-full p-1 outline-none rounded-md"
        />
      </div>

      {/* Results list */}
      {loading && <div className="m-2 p-1 text-sm">Searching…</div>}

      {!loading && results.length > 0 && (
        <div className="m-2 space-y-2">
          {results.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => handleSelectResult(r)}
              className="flex w-full items-start gap-2 rounded-md border border-black bg-gray-100 p-2 text-left"
            >
              {r.thumbnail && (
                <img
                  src={r.thumbnail}
                  alt={r.title}
                  className="h-16 w-12 flex-shrink-0 border border-black object-cover"
                />
              )}
              <div className="flex-1">
                <div className="text-xs font-semibold">{r.title}</div>
                {r.authors.length > 0 && (
                  <div className="text-[10px]">{r.authors.join(", ")}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Actions row */}
      <div className="m-2 flex gap-2">
        <button
          type="button"
          onClick={add}
          className="flex-1 border border-black p-1 text-center rounded-md"
        >
          Add manually
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border border-black p-1 text-center rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddBookComposer;
