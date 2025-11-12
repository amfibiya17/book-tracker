import { ColumnHeader } from "../ColumnHeader";
import { ColumnBody } from "../ColumnBody";
import type { ColumnKey } from "../../config/columns";

type Props = {
  columnKey: ColumnKey;
  onAddManual: (title: string) => void;
};

function Column({ columnKey, onAddManual }: Props) {
  return (
    <div className="flex flex-col border border-black">
      <ColumnHeader columnKey={columnKey} onAddManual={onAddManual} />
      <ColumnBody />
    </div>
  );
}

export default Column;
