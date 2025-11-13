import { useState, useEffect, useRef } from "react";

interface AddBookComposerProps {
  onAddManual: (title: string) => void;
  onClose: () => void;
}

function AddBookComposer(props: AddBookComposerProps) {
  const { onAddManual, onClose } = props;

  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const add = () => {
    const title = query.trim();
    if (title) onAddManual(title);
    onClose();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const el = containerRef.current;
      if (el && !el.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [onClose]);

  return (
    <div ref={containerRef}>
      <div className="m-1 border border-black">
        <input
          ref={inputRef}
          placeholder="Type a book title…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "Enter") add();
          }}
          className="w-full p-1 outline-none"
        />
      </div>
      <div className="m-1 flex gap-1">
        <button
          type="button"
          onClick={add}
          className="flex-1 border border-black p-1 text-center"
        >
          Add manually
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border border-black p-1 text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddBookComposer;
