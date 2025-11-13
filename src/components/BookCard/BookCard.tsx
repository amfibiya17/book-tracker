import type { Book } from "../../types";

interface BookCardProps {
  book: Book;
}

function BookCard(props: BookCardProps) {
  const { book } = props;

  return (
    <div className="m-1 flex flex-col border border-black">{book.title}</div>
  );
}

export default BookCard;
