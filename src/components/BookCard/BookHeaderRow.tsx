import type { Book } from "../../types";

interface BookHeaderRowProps {
  book: Book;
}

const truncateWords = (text: string, maxWords: number) => {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "…";
};

const getFirstAuthors = (authors: string[], maxAuthors: number) => {
  if (authors.length <= maxAuthors) return authors.join(", ");
  return authors.slice(0, maxAuthors).join(", ") + "…";
};

function BookHeaderRow({ book }: BookHeaderRowProps) {
  const shortenedTitle = truncateWords(book.title, 20);
  const shortenedAuthors =
    book.authors && book.authors.length > 0
      ? truncateWords(getFirstAuthors(book.authors, 2), 20)
      : "";

  return (
    <div className="flex flex-1 gap-2">
      <div className="flex h-24 w-16 shrink-0 items-center justify-center border border-base-300 bg-base-200">
        {book.thumbnail ? (
          <img
            src={book.thumbnail}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[10px] text-center text-base-content/50">
            No cover
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="clamp-2 wrap-break-word text-base font-semibold text-base-content">
          {shortenedTitle}
        </div>
        {shortenedAuthors && (
          <div className="clamp-1 wrap-break-word text-sm text-base-content/70">
            {shortenedAuthors}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookHeaderRow;
