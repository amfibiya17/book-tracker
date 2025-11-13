import type { Book } from "../types";

export interface BoardState {
  backlog: Book[];
  inProgress: Book[];
  finished: Book[];
}

const STORAGE_KEY = "book-tracker-board";
const FIVE_MIN_MS = 5 * 60 * 1000;

export const emptyBoardState: BoardState = {
  backlog: [],
  inProgress: [],
  finished: [],
};

export function loadBoardState(): BoardState {
  if (typeof window === "undefined") return emptyBoardState;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyBoardState;

    const parsed = JSON.parse(raw) as { savedAt: number; state: BoardState };

    // too old → ignore and start fresh
    if (Date.now() - parsed.savedAt > FIVE_MIN_MS) {
      return emptyBoardState;
    }

    return parsed.state ?? emptyBoardState;
  } catch {
    // if something goes wrong just start empty
    return emptyBoardState;
  }
}

export function saveBoardState(state: BoardState): void {
  if (typeof window === "undefined") return;

  const payload = {
    savedAt: Date.now(),
    state,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore write errors
  }
}
