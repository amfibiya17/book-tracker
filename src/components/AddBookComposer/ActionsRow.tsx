interface ActionsRowProps {
  onAdd: () => void;
  onCancel: () => void;
}

function ActionsRow({ onAdd, onCancel }: ActionsRowProps) {
  return (
    <div className="m-2 flex gap-2">
      <button
        type="button"
        onClick={onAdd}
        className="btn btn-md btn-secondary flex-1"
      >
        Add manually
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="btn btn-md btn-accent flex-1"
      >
        Cancel
      </button>
    </div>
  );
}

export default ActionsRow;
