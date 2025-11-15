interface BookMetaRowProps {
  year?: number;
  pages?: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

function BookMetaRow({ year, pages, onEdit, onDelete }: BookMetaRowProps) {
  const hasActions = onEdit || onDelete;

  return (
    <div className="mt-1 ml-1 flex items-center justify-between text-[12px]">
      <div className="flex gap-2">
        <div className="w-16">Year: {year ?? "-"}</div>
        <div>Pages: {pages ?? "-"}</div>
      </div>

      {hasActions && (
        <div className="flex">
          {onEdit && (
            <button
              type="button"
              aria-label="Edit book"
              className="h-6 w-6 text-xs leading-none rotate-45"
              onClick={onEdit}
            >
              ✕
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              aria-label="Delete book"
              className="h-6 w-6 text-xs leading-none"
              onClick={onDelete}
            >
              ✕
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BookMetaRow;
