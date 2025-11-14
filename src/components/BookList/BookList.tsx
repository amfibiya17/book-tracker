import { BookCard } from "../BookCard";
import type { Book } from "../../types";

interface BookListProps {
  books: Book[];
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (book: Book) => void;
}

function BookList(props: BookListProps) {
  const { books, onEditBook, onDeleteBook } = props;

  if (!books.length) {
    return (
      <div className="mt-2 p-1 text-center text-gray-400">No books yet...</div>
    );
  }

  return (
    <div className="flex flex-col">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEditBook}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  );
}

export default BookList;
