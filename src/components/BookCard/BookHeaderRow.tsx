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
      <div className="m-1 h-16 w-12 flex-shrink-0 border border-gray-300 flex items-center justify-center">
        {book.thumbnail ? (
          <img
            src={book.thumbnail}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[10px] text-center text-gray-400">
            No cover
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="text-[14px] font-semibold clamp-2">
          {shortenedTitle}
        </div>
        {shortenedAuthors && (
          <div className="text-[12px] clamp-1">{shortenedAuthors}</div>
        )}
      </div>
    </div>
  );
}

export default BookHeaderRow;
