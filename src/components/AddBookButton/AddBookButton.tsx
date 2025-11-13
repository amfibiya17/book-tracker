interface AddBookButtonProps {
  onOpen: () => void;
}

function AddBookButton(props: AddBookButtonProps) {
  const { onOpen } = props;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="m-1 flex flex-col border border-black"
    >
      + Add a Book
    </button>
  );
}

export default AddBookButton;
