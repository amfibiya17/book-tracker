import { useState } from "react";
import { labelFor, type ColumnKey } from "../../config/columns";
import { StatusBadge } from "../StatusBadge";
import { AddBookButton } from "../AddBookButton";
import { AddBookComposer } from "../AddBookComposer";

interface ColumnHeaderProps {
  columnKey: ColumnKey;
  onAddManual: (title: string) => void;
  onAddFromSearch: (data: {
    id: string;
    title: string;
    authors: string[];
    thumbnail?: string;
    publishedYear?: number;
    pageCount?: number;
  }) => void;
}

function ColumnHeader(props: ColumnHeaderProps) {
  const { columnKey, onAddManual, onAddFromSearch } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col bg-gray-300 rounded-md">
      <StatusBadge label={labelFor(columnKey)} />
      {open ? (
        <AddBookComposer
          onAddManual={onAddManual}
          onAddFromSearch={onAddFromSearch}
          onClose={() => setOpen(false)}
        />
      ) : (
        <AddBookButton onOpen={() => setOpen(true)} />
      )}
    </div>
  );
}

export default ColumnHeader;
