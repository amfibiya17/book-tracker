import { ColumnHeader } from "../ColumnHeader";
import { ColumnBody } from "../ColumnBody";
import type { ColumnKey } from "../../config/columns";
import type { Book } from "../../types";

interface ColumnProps {
  columnKey: ColumnKey;
  books: Book[];
  onAddManual: (title: string) => void;
}

function Column(props: ColumnProps) {
  const { columnKey, books, onAddManual } = props;

  return (
    <div className="flex flex-col border border-black">
      <ColumnHeader columnKey={columnKey} onAddManual={onAddManual} />
      <ColumnBody books={books} />
    </div>
  );
}

export default Column;
