import { loadBoardState, type BoardState } from "../../state/boardStorage";
import { COLUMNS, type ColumnKey, labelFor } from "../../config/columns";

function booksForColumn(state: BoardState, key: ColumnKey) {
  return state[key];
}

function formatColumn(title: string, books: BoardState["backlog"]) {
  if (!books.length) {
    return `${title}\nNo books in this column.\n`;
  }

  const lines = books.map((book) => {
    const authors = book.authors?.join(", ") ?? "";
    const year = book.publishedYear ? `Year: ${book.publishedYear}` : "";
    const pages = book.pageCount ? `Pages: ${book.pageCount}` : "";

    const metaParts = [authors && `Author(s): ${authors}`, year, pages].filter(
      Boolean
    );

    const metaLine = metaParts.length ? `  ${metaParts.join(" | ")}` : "  —";

    return `${book.title}\n${metaLine}`;
  });

  return `${title}\n${lines.join("\n\n")}\n`;
}

export function formatBoardAsText(state: BoardState): string {
  const sections = COLUMNS.map(({ key }) => {
    const title = labelFor(key);
    const books = booksForColumn(state, key);
    return formatColumn(title, books);
  });

  return sections.join("\n\n");
}

export function saveBoardAsText() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const state = loadBoardState();
  const content = formatBoardAsText(state);

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  link.href = url;
  link.download = `book-board-${today}.txt`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
