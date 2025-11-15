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
        className="flex-1 border border-black p-1 text-center rounded-md"
      >
        Add manually
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="flex-1 border border-black p-1 text-center rounded-md"
      >
        Cancel
      </button>
    </div>
  );
}

export default ActionsRow;
