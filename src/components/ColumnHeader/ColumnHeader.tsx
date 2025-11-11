import StatusBadge from "../StatusBadge/StatusBadge";
import AddBookButton from "../AddBookButton/AddBookButton";
import { labelFor, type ColumnKey } from "../../config/columns";

function ColumnHeader({ columnKey }: { columnKey: ColumnKey }) {
  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <StatusBadge label={labelFor(columnKey)} />
      <AddBookButton />
    </div>
  );
}

export default ColumnHeader;
