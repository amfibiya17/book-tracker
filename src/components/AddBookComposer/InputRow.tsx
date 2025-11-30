import type React from "react";

interface InputRowProps {
  query: string;
  setQuery: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onClose: () => void;
  onConfirm: () => void;
}

function InputRow({
  query,
  setQuery,
  inputRef,
  onClose,
  onConfirm,
}: InputRowProps) {
  return (
    <div className="m-2">
      <input
        ref={inputRef}
        placeholder="Type a book title…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
          if (e.key === "Enter") onConfirm();
        }}
        maxLength={40}
        className="input input-md input-bordered w-full"
      />
    </div>
  );
}

export default InputRow;
