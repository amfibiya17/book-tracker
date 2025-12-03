import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
interface BookMetaRowProps {
  year?: number;
  pages?: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

function BookMetaRow({ year, pages, onEdit, onDelete }: BookMetaRowProps) {
  const hasActions = onEdit || onDelete;

  return (
    <div className="flex items-center justify-between text-base-content/80">
      <div className="flex gap-2">
        <span className="badge badge-neutral badge-sm badge-grow h-5.5">
          Year: {year ?? "0000"}
        </span>
        <span className="badge badge-neutral badge-sm badge-grow h-5.5">
          Pages: {pages ?? "000"}
        </span>
      </div>

      {hasActions && (
        <div className="flex gap-1 ml-1">
          {onEdit && (
            <button
              type="button"
              aria-label="Edit book"
              className="btn btn-ghost btn-lg min-h-0 h-6 px-2 bg-transparent hover:bg-transparent border-none hover:border-none shadow-none hover:shadow-none hover:text-primary"
              onClick={onEdit}
            >
              <EditIcon />
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              aria-label="Delete book"
              className="btn btn-ghost btn-lg min-h-0 h-6 px-2 bg-transparent hover:bg-transparent border-none hover:border-none shadow-none hover:shadow-none hover:text-error"
              onClick={onDelete}
            >
              <DeleteIcon />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default BookMetaRow;
