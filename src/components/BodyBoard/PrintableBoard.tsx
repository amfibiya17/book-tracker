import type { Book } from "../../types";
import { COLUMNS, type ColumnKey, labelFor } from "../../config/columns";

interface PrintableBoardProps {
  backlog: Book[];
  inProgress: Book[];
  finished: Book[];
}

function PrintableBoard({
  backlog,
  inProgress,
  finished,
}: PrintableBoardProps) {
  const booksFor = (key: ColumnKey): Book[] =>
    key === "backlog" ? backlog : key === "inProgress" ? inProgress : finished;

  return (
    <div>
      {COLUMNS.map(({ key }) => {
        const books = booksFor(key);
        const title = labelFor(key);

        return (
          <section key={key} className="mb-6 break-inside-avoid">
            <h2 className="mb-2 text-xl font-extrabold tracking-wide text-gray-400">
              {title}
            </h2>

            {books.length === 0 ? (
              <p className="text-sm italic text-gray-400">
                No books in this column.
              </p>
            ) : (
              <ul className="space-y-3">
                {books.map((book) => {
                  const hasMeta =
                    (book.authors && book.authors.length > 0) ||
                    book.publishedYear ||
                    book.pageCount;

                  return (
                    <li key={book.id}>
                      <div className="font-semibold">{book.title}</div>

                      <div className="text-sm">
                        {book.authors && book.authors.length > 0 && (
                          <div>Author(s): {book.authors.join(", ")}</div>
                        )}

                        {(book.publishedYear || book.pageCount) && (
                          <div>
                            {book.publishedYear && (
                              <>Year: {book.publishedYear}</>
                            )}
                            {book.publishedYear && book.pageCount && " | "}
                            {book.pageCount && <>Pages: {book.pageCount}</>}
                          </div>
                        )}

                        {!hasMeta && <div>—</div>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default PrintableBoard;
