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
  duplicateMessage?: string | null;
}

function Column(props: ColumnProps) {
  const {
    columnKey,
    books,
    onAddManual,
    onAddFromSearch,
    onEditBook,
    onDeleteBook,
    duplicateMessage,
  } = props;

  return (
    <div className="flex flex-col">
      <div className="h-7 mb-2 flex items-center justify-center">
        {duplicateMessage && (
          <div className="max-w-[90%] rounded-md border border-yellow-500 bg-yellow-100 px-2 py-1 text-center text-[10px]">
            {duplicateMessage}
          </div>
        )}
      </div>

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
