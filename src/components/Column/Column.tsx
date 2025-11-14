import { ColumnHeader } from "../ColumnHeader";
import { ColumnBody } from "../ColumnBody";
import type { ColumnKey } from "../../config/columns";
import type { Book } from "../../types";

interface ColumnProps {
  columnKey: ColumnKey;
  books: Book[];
  onAddManual: (title: string) => void;
  onAddFromSearch: (data: {
    id: string;
    title: string;
    authors: string[];
    thumbnail?: string;
    publishedYear?: number;
    pageCount?: number;
  }) => void;
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (book: Book) => void;
}

function Column(props: ColumnProps) {
  const {
    columnKey,
    books,
    onAddManual,
    onAddFromSearch,
    onEditBook,
    onDeleteBook,
  } = props;

  return (
    <div className="flex flex-col">
      <ColumnHeader
        columnKey={columnKey}
        onAddManual={onAddManual}
        onAddFromSearch={onAddFromSearch}
      />
      <ColumnBody
        books={books}
        onEditBook={onEditBook}
        onDeleteBook={onDeleteBook}
      />
    </div>
  );
}

export default Column;
