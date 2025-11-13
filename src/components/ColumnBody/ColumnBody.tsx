import { BookList } from "../BookList";
import type { Book } from "../../types";

interface ColumnBodyProps {
  books: Book[];
}

function ColumnBody(props: ColumnBodyProps) {
  const { books } = props;

  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <BookList books={books} />
    </div>
  );
}

export default ColumnBody;
