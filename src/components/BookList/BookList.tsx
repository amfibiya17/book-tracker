import { BookCard } from "../BookCard";

function BookList() {
  return (
    <div className="m-1 flex flex-col border border-black">
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}

export default BookList;
