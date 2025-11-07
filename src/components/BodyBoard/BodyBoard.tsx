import { Column } from "../Column";

function BodyBoard() {
  return (
    <main className="flex-1 border border-black p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <Column />
        </div>
        <div className="flex-1">
          <Column />
        </div>
        <div className="flex-1">
          <Column />
        </div>
      </div>
    </main>
  );
}

export default BodyBoard;
