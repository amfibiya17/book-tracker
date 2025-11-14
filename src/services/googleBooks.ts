export interface BookSearchResult {
  id: string;
  title: string;
  authors: string[];
  thumbnail?: string;
  publishedYear?: number;
  pageCount?: number;
}

interface GoogleVolumeInfo {
  title?: string;
  authors?: string[];
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  publishedDate?: string;
  pageCount?: number;
}

interface GoogleVolume {
  id?: string;
  volumeInfo?: GoogleVolumeInfo;
}

export async function searchBooks(
  query: string,
  signal?: AbortSignal
): Promise<BookSearchResult[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const url = new URL("https://www.googleapis.com/books/v1/volumes");
  url.searchParams.set("q", trimmed);
  url.searchParams.set("maxResults", "10");

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  const items = (data.items ?? []) as GoogleVolume[];

  return items.map((item) => {
    const volume = item.volumeInfo ?? {};
    const imageLinks = volume.imageLinks ?? {};

    const publishedDate = volume.publishedDate as string | undefined;
    let publishedYear: number | undefined;

    if (publishedDate) {
      const yearPart = publishedDate.slice(0, 4);
      const parsedYear = Number(yearPart);
      if (!Number.isNaN(parsedYear)) {
        publishedYear = parsedYear;
      }
    }

    return {
      id: item.id as string,
      title: (volume.title as string) ?? "Untitled",
      authors: (volume.authors as string[]) ?? [],
      thumbnail:
        (imageLinks.smallThumbnail as string) ||
        (imageLinks.thumbnail as string) ||
        undefined,
      publishedYear,
      pageCount: (volume.pageCount as number | undefined) ?? undefined,
    };
  });
}
