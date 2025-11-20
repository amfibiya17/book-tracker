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
  const [duplicateInfo, setDuplicateInfo] = useState<{
    column: ColumnKey;
    message: string;
  } | null>(null);

  // helpers for columns
  const setFor = (key: ColumnKey) =>
    key === "backlog"
      ? setBacklog
      : key === "inProgress"
        ? setInProgress
        : setFinished;

  const booksFor = (key: ColumnKey) =>
    key === "backlog" ? backlog : key === "inProgress" ? inProgress : finished;

  const getAllBooks = () => [...backlog, ...inProgress, ...finished];

  // generic helpers
  const normaliseTitle = (title: string) => title.trim().toLowerCase();

  const showDuplicateMessage = (key: ColumnKey) => {
    setDuplicateInfo({
      column: key,
      message: "That book is already on your board",
    });

    window.setTimeout(() => {
      setDuplicateInfo((current) =>
        current && current.column === key ? null : current
      );
    }, 3000);
  };

  const addBookToColumn = (key: ColumnKey, book: Book) => {
    setFor(key)((prev) => [book, ...prev]);
  };

  // duplicate checks
  const isDuplicateManualBook = (title: string) => {
    const normalised = normaliseTitle(title);

    return getAllBooks().some(
      (book) =>
        book.source === "manual" && normaliseTitle(book.title) === normalised
    );
  };

  const isDuplicateGoogleBook = (googleId: string) => {
    return getAllBooks().some(
      (book) => book.source === "google" && book.sourceId === googleId
    );
  };

  // add/remove actions
  const addManualBookTo = (key: ColumnKey, title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    if (isDuplicateManualBook(trimmedTitle)) {
      showDuplicateMessage(key);
      return;
    }

    const book: Book = {
      id: newId(),
      title: trimmedTitle,
      source: "manual",
      createdAt: Date.now(),
    };

    addBookToColumn(key, book);
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
      showDuplicateMessage(key);
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

    addBookToColumn(key, book);
  };

  const removeBookFrom = (key: ColumnKey, id: string) => {
    setFor(key)((prev) => prev.filter((book) => book.id !== id));
  };

  // whenever columns change -> save to localStorage
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
              duplicateMessage={
                duplicateInfo?.column === key ? duplicateInfo.message : null
              }
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
