type Props = { onOpen: () => void };

function AddBookButton({ onOpen }: Props) {
  return (
    <button onClick={onOpen} className="m-1 flex flex-col border border-black">
      + Add a Book
    </button>
  );
}

export default AddBookButton;
