import BookList from "../BookList/BookList";

function ColumnBody() {
  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <BookList />
    </div>
  );
}

export default ColumnBody;
