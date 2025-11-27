import HamburgerIcon from "./HamburgerIcon";

interface HamburgerDropdownProps {
  onPrintBoard: () => void;
  onSaveBoard: () => void;
  onResetBoard: () => void;
}

function HamburgerDropdown({
  onPrintBoard,
  onSaveBoard,
  onResetBoard,
}: HamburgerDropdownProps) {
  const menuOptionsButton =
    "btn btn-md w-full justify-end border border-transparent bg-transparent text-base-100 shadow-none hover:bg-primary";

  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex={0}
        type="button"
        className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
        aria-label="Open board menu"
      >
        <HamburgerIcon className="w-5" />
      </button>

      <div className="dropdown-content mt-2 rounded-box border border-black p-px bg-neutral shadow">
        <ul
          className="menu menu-sm w-40 rounded-box border border-base-100 bg-neutral p-2"
          aria-label="Board menu"
        >
          <li>
            <button
              type="button"
              className={menuOptionsButton}
              onClick={onPrintBoard}
            >
              Print Book Board
            </button>
          </li>

          <li>
            <button
              type="button"
              className={menuOptionsButton}
              onClick={onSaveBoard}
            >
              Export as Text File
            </button>
          </li>

          <li>
            <button
              type="button"
              className={menuOptionsButton}
              onClick={onResetBoard}
            >
              Reset Book Board
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerDropdown;
