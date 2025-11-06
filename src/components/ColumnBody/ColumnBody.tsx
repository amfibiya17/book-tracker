import { BookList } from "../BookList";

function ColumnBody() {
  return (
    <div className="flex flex-col border border-black">
      <BookList />
    </div>
  );
}

export default ColumnBody;
