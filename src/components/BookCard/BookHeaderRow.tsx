import type { Book } from "../../types";

interface BookHeaderRowProps {
  book: Book;
}

function BookHeaderRow({ book }: BookHeaderRowProps) {
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
  );
}

export default BookHeaderRow;
