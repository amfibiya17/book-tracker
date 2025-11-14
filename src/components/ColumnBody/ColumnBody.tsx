import { BookList } from "../BookList";
import type { Book } from "../../types";

interface ColumnBodyProps {
  books: Book[];
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (book: Book) => void;
}

function ColumnBody(props: ColumnBodyProps) {
  const { books, onEditBook, onDeleteBook } = props;

  return (
    <div className="flex flex-col">
      <BookList
        books={books}
        onEditBook={onEditBook}
        onDeleteBook={onDeleteBook}
      />
    </div>
  );
}

export default ColumnBody;
