export const COLUMNS = [
  { key: "backlog", label: "Backlog" },
  { key: "inProgress", label: "In Progress" },
  { key: "finished", label: "Finished" },
] as const;

export type ColumnKey = (typeof COLUMNS)[number]["key"];
export const labelFor = (k: ColumnKey) =>
  COLUMNS.find((c) => c.key === k)!.label;
