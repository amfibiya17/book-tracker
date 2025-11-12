import { useState } from "react";
import { labelFor, type ColumnKey } from "../../config/columns";
import { StatusBadge } from "../StatusBadge";
import { AddBookButton } from "../AddBookButton";
import { AddBookComposer } from "../AddBookComposer";

type Props = {
  columnKey: ColumnKey;
  onAddManual: (title: string) => void;
};

function ColumnHeader({ columnKey, onAddManual }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-1 flex flex-col border border-black bg-gray-300">
      <StatusBadge label={labelFor(columnKey)} />
      {open ? (
        <AddBookComposer
          onAddManual={onAddManual}
          onClose={() => setOpen(false)}
        />
      ) : (
        <AddBookButton onOpen={() => setOpen(true)} />
      )}
    </div>
  );
}

export default ColumnHeader;
