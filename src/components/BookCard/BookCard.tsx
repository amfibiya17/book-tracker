import type { Book } from "../../types";
import BookMetaRow from "./BookMetaRow";
import BookHeaderRow from "./BookHeaderRow";

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (book: Book) => void;
}

function BookCard(props: BookCardProps) {
  const { book, onEdit, onDelete } = props;

  return (
    <div className="mt-4 flex h-28 flex-col rounded-md border border-black p-1">
      <BookHeaderRow book={book} />

      <BookMetaRow
        year={book.publishedYear}
        pages={book.pageCount}
        onEdit={onEdit ? () => onEdit(book) : undefined}
        onDelete={onDelete ? () => onDelete(book) : undefined}
      />
    </div>
  );
}

export default BookCard;
