export type Book = {
  id: string;
  title: string;
  authors?: string[];
  thumbnail?: string;
  source: "google" | "manual";
  sourceId?: string;
  createdAt: number;
  publishedYear?: number;
  pageCount?: number;
};
