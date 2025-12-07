import { useState } from "react";
import type { Book } from "../../types";
import BookMetaRow from "./BookMetaRow";
import BookHeaderRow from "./BookHeaderRow";
import { WorkInProgressModal } from "../WorkInProgressModal";

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (book: Book) => void;
}

function BookCard(props: BookCardProps) {
  const { book, onEdit, onDelete } = props;

  const [isWorkInProgressOpen, setIsWorkInProgressOpen] = useState(false);

  const handleEditClick = () => {
    if (onEdit) {
      onEdit(book);
    }
    setIsWorkInProgressOpen(true);
  };

  const handleCloseWorkInProgress = () => {
    setIsWorkInProgressOpen(false);
  };

  return (
    <>
      <div
        className="mt-4 card bg-base-100 border border-base-300 shadow-lg
                   transition duration-150 ease-out
                   hover:border-primary hover:shadow-xl hover:-translate-y-1
                   text-sm md:text-base min-h-26 cursor-pointer"
      >
        <div className="card-body p-2 gap-1 flex flex-col justify-between">
          <BookHeaderRow book={book} />
          <BookMetaRow
            year={book.publishedYear}
            pages={book.pageCount}
            onEdit={onEdit ? handleEditClick : undefined}
            onDelete={onDelete ? () => onDelete(book) : undefined}
          />
        </div>
      </div>

      <WorkInProgressModal
        open={isWorkInProgressOpen}
        onClose={handleCloseWorkInProgress}
      />
    </>
  );
}

export default BookCard;
