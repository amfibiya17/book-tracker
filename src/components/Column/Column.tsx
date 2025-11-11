import ColumnHeader from "../ColumnHeader/ColumnHeader";
import ColumnBody from "../ColumnBody/ColumnBody";
import type { ColumnKey } from "../../config/columns";

type Props = { columnKey: ColumnKey };

function Column({ columnKey }: Props) {
  return (
    <div className="flex flex-col border border-black">
      <ColumnHeader columnKey={columnKey} />
      <ColumnBody />
    </div>
  );
}

export default Column;
