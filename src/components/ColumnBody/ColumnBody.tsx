import { BookList } from "../BookList";

function ColumnBody() {
  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <BookList />
    </div>
  );
}

export default ColumnBody;
