interface AddBookButtonProps {
  onOpen: () => void;
}

function AddBookButton(props: AddBookButtonProps) {
  const { onOpen } = props;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="m-2 flex flex-col"
    >
      + Add a Book
    </button>
  );
}

export default AddBookButton;
