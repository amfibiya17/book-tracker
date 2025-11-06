import { StatusBadge } from "../StatusBadge";
import { AddBookButton } from "../AddBookButton";

function ColumnHeader() {
  return (
    <div className="flex flex-col border border-black">
      <StatusBadge />
      <AddBookButton />
    </div>
  );
}

export default ColumnHeader;
