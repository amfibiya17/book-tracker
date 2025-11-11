import Column from "../Column/Column";
import { COLUMNS } from "../../config/columns";

function BodyBoard() {
  return (
    <main className="flex-1 border border-black p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        {COLUMNS.map(({ key }) => (
          <div key={key} className="flex-1">
            <Column columnKey={key} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default BodyBoard;
