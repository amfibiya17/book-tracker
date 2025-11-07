import { StatusBadge } from "../StatusBadge";
import { AddBookButton } from "../AddBookButton";

function ColumnHeader() {
  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <StatusBadge />
      <AddBookButton />
    </div>
  );
}

export default ColumnHeader;
