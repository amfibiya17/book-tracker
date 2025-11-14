import type { Book } from "../../types";

interface BookCardProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (book: Book) => void;
}

function BookCard(props: BookCardProps) {
  const { book, onEdit, onDelete } = props;

  const truncateWords = (text: string, maxWords: number) => {
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "…";
  };

  const getFirstAuthors = (authors: string[], maxAuthors: number) => {
    if (authors.length <= maxAuthors) return authors.join(", ");
    return authors.slice(0, maxAuthors).join(", ") + "…";
  };

  const shortenedTitle = truncateWords(book.title, 10);

  const shortenedAuthors =
    book.authors && book.authors.length > 0
      ? getFirstAuthors(book.authors, 2)
      : "";

  return (
    <div className="mt-4 flex h-28 flex-col rounded-md border border-black p-1">
      {/* TOP ROW: image + text */}
      <div className="flex flex-1 gap-2">
        <div className="m-1 h-16 w-12 flex-shrink-0 border border-gray-300 flex items-center justify-center">
          {book.thumbnail && (
            <img
              src={book.thumbnail}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          )}
          {!book.thumbnail && (
            <span className="text-[10px] text-center text-gray-400">
              No cover
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="text-[14px] font-semibold">{shortenedTitle}</div>
          {shortenedAuthors && (
            <div className="text-[12px]">{shortenedAuthors}</div>
          )}
        </div>
      </div>

      {/* BOTTOM ROW: year / pages + edit/delete */}
      <div className="mt-1 ml-1 flex items-center justify-between text-[12px]">
        <div className="flex gap-2">
          <div className="w-16">Year: {book.publishedYear ?? "-"}</div>
          <div>Pages: {book.pageCount ?? "-"}</div>
        </div>

        <div className="flex">
          <button
            type="button"
            aria-label="Edit book"
            className="h-6 w-6 text-xs leading-none rotate-45"
            onClick={() => onEdit?.(book)}
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Delete book"
            className="h-6 w-6 text-xs leading-none"
            onClick={() => onDelete?.(book)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
