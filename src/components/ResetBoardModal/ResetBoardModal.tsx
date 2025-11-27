interface ResetBoardModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function ResetBoardModal({ open, onConfirm, onCancel }: ResetBoardModalProps) {
  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-xs bg-neutral text-base-100">
        <h2 className="text-xl font-bold">Reset Book Board?</h2>

        <p className="mt-6 text-sm">This will remove all books from all columns.</p>
        <p className="mt-1 text-sm">This action cannot be undone.</p>

        <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-end md:gap-3">
          <button
            type="button"
            className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn btn-sm btn-error shadow-none text-base-100"
            onClick={onConfirm}
          >
            Reset board
          </button>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onCancel} aria-hidden="true" />
    </dialog>
  );
}

export default ResetBoardModal;
