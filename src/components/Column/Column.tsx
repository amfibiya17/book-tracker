import { ColumnHeader } from "../ColumnHeader";
import { ColumnBody } from "../ColumnBody";

function Column() {
  return (
    <div className="flex flex-col border border-black">
      <ColumnHeader />
      <ColumnBody />
    </div>
  );
}

export default Column;
