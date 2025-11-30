interface AddBookButtonProps {
  onOpen: () => void;
}

function AddBookButton(props: AddBookButtonProps) {
  const { onOpen } = props;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="btn btn-md btn-ghost"
      aria-label="Add a new book to this column"
    >
      <span className="text-ms pb-0.5">+</span>
      <span className="text-xs ">Add a Book</span>
    </button>
  );
}

export default AddBookButton;
