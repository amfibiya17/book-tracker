import { useEffect, useState } from "react";
import { Column } from "../Column";
import { COLUMNS, type ColumnKey } from "../../config/columns";
import type { Book } from "../../types";
import {
  loadBoardState,
  saveBoardState,
  type BoardState,
} from "../../state/boardStorage";

const newId = () => crypto.randomUUID();

function BodyBoard() {
  const initialBoard: BoardState = loadBoardState();

  const [backlog, setBacklog] = useState<Book[]>(initialBoard.backlog);
  const [inProgress, setInProgress] = useState<Book[]>(initialBoard.inProgress);
  const [finished, setFinished] = useState<Book[]>(initialBoard.finished);

  const setFor = (key: ColumnKey) =>
    key === "backlog"
      ? setBacklog
      : key === "inProgress"
        ? setInProgress
        : setFinished;

  const addManualBookTo = (key: ColumnKey, title: string) => {
    const book: Book = {
      id: newId(),
      title,
      source: "manual",
      createdAt: Date.now(),
    };
    setFor(key)((prev) => [book, ...prev]);
  };

  const isDuplicateGoogleBook = (googleId: string) => {
    const allBooks = [...backlog, ...inProgress, ...finished];

    return allBooks.some(
      (book) => book.source === "google" && book.sourceId === googleId
    );
  };

  const addBookFromSearch = (
    key: ColumnKey,
    data: {
      id: string;
      title: string;
      authors: string[];
      thumbnail?: string;
      publishedYear?: number;
      pageCount?: number;
    }
  ) => {
    if (isDuplicateGoogleBook(data.id)) {
      // TODO: show a message later "Book already on board"
      return;
    }

    const book: Book = {
      id: newId(),
      title: data.title,
      authors: data.authors,
      thumbnail: data.thumbnail,
      publishedYear: data.publishedYear,
      pageCount: data.pageCount,
      source: "google",
      sourceId: data.id,
      createdAt: Date.now(),
    };

    setFor(key)((prev) => [book, ...prev]);
  };

  const removeBookFrom = (key: ColumnKey, id: string) => {
    setFor(key)((prev) => prev.filter((book) => book.id !== id));
  };

  const booksFor = (key: ColumnKey) =>
    key === "backlog" ? backlog : key === "inProgress" ? inProgress : finished;

  // whenever columns change → save to localStorage
  useEffect(() => {
    const state: BoardState = { backlog, inProgress, finished };
    saveBoardState(state);
  }, [backlog, inProgress, finished]);

  return (
    <main className="mt-4 mb-4 flex-1">
      <div className="flex flex-col gap-8 md:flex-row">
        {COLUMNS.map(({ key }) => (
          <div key={key} className="flex-1">
            <Column
              columnKey={key}
              books={booksFor(key)}
              onAddManual={(title) => addManualBookTo(key, title)}
              onAddFromSearch={(data) => addBookFromSearch(key, data)}
              onEditBook={(book) => {
                console.log("Edit book", book.title, "in column", key);
              }}
              onDeleteBook={(book) => removeBookFrom(key, book.id)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default BodyBoard;
