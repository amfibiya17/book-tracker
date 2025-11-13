import { BookCard } from "../BookCard";
import type { Book } from "../../types";

interface BookListProps {
  books: Book[];
}

function BookList(props: BookListProps) {
  const { books } = props;

  if (!books.length) {
    return <div className="m-1 border border-black p-1">No books yet</div>;
  }

  return (
    <div className="m-1 flex flex-col border border-black">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
