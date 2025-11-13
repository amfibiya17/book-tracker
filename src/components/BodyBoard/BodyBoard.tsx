import { useState } from "react";
import { Column } from "../Column";
import { COLUMNS, type ColumnKey } from "../../config/columns";
import type { Book } from "../../types";

const newId = () => crypto.randomUUID();

function BodyBoard() {
  const [backlog, setBacklog] = useState<Book[]>([]);
  const [inProgress, setInProgress] = useState<Book[]>([]);
  const [finished, setFinished] = useState<Book[]>([]);

  const setFor = (key: ColumnKey) =>
    key === "backlog"
      ? setBacklog
      : key === "inProgress"
        ? setInProgress
        : setFinished;

  const addBookTo = (key: ColumnKey, title: string) => {
    const book: Book = {
      id: newId(),
      title,
      source: "manual",
      createdAt: Date.now(),
    };
    setFor(key)((prev) => [book, ...prev]);
  };

  const booksFor = (key: ColumnKey) =>
    key === "backlog" ? backlog : key === "inProgress" ? inProgress : finished;

  return (
    <main className="flex-1 border border-black p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        {COLUMNS.map(({ key }) => (
          <div key={key} className="flex-1">
            <Column
              columnKey={key}
              books={booksFor(key)}
              onAddManual={(title) => addBookTo(key, title)}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default BodyBoard;
