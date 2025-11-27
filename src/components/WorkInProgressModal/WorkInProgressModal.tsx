interface WorkInProgressModalProps {
  open: boolean;
  onClose: () => void;
}

function WorkInProgressModal({ open, onClose }: WorkInProgressModalProps) {
  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-xs bg-neutral text-base-100">
        <h2 className="text-xl font-bold">Work in progress</h2>

        <p className="mt-6 text-sm">This feature is still being built.</p>
        <p className="mt-1 text-sm">Please check back later.</p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />
    </dialog>
  );
}

export default WorkInProgressModal;
