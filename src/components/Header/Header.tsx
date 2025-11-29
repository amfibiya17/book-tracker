import { useState } from "react";
import { saveBoardAsText } from "./saveBoardAsText";
import HamburgerDropdown from "../HamburgerDropdown/HamburgerDropdown";
import HeaderIcon from "./HeaderIcon";
import ResetBoardModal from "../ResetBoardModal/ResetBoardModal";
import { WorkInProgressModal } from "../WorkInProgressModal";
import type { MouseEvent } from "react";

interface HeaderProps {
  onResetBoard: () => void;
}

function Header({ onResetBoard }: HeaderProps) {
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [isWorkInProgressOpen, setIsWorkInProgressOpen] = useState(false);

  const handleResetClick = () => {
    setIsResetOpen(true);
  };

  const handleConfirmReset = () => {
    onResetBoard();
    setIsResetOpen(false);
  };
  const handleCancelReset = () => {
    setIsResetOpen(false);
  };

  const openWorkInProgressModal = () => {
    setIsWorkInProgressOpen(true);
  };

  const closeWorkInProgressModal = () => {
    setIsWorkInProgressOpen(false);
  };

  const handleLogoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // stop navigation for now
    openWorkInProgressModal();
  };

  return (
    <>
      <header className="bg-neutral text-base-100 print:hidden">
        <div
          className="
          mx-auto flex w-full max-w-7xl
          flex-wrap items-center justify-between gap-3
          px-8 py-6
        "
        >
          <a
            href="/#"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
            aria-label="Go to Book Board home"
          >
            <span className="hidden min-[400px]:inline text-2xl font-semibold tracking-tight">
              Book Board
            </span>

            <HeaderIcon className="w-8 mb-1" />
          </a>

          <div className="flex flex-wrap gap-3">
            <a
              href="/logout-user-page"
              onClick={handleLogoutClick}
              className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
              aria-label="Logout user (work in progress)"
            >
              {/* TODO add login and logout functionality */}
              Logout
            </a>

            <HamburgerDropdown
              onPrintBoard={() => window.print()}
              onSaveBoard={saveBoardAsText}
              onResetBoard={handleResetClick}
            />
          </div>
        </div>
      </header>

      <ResetBoardModal
        open={isResetOpen}
        onConfirm={handleConfirmReset}
        onCancel={handleCancelReset}
      />

      <WorkInProgressModal
        open={isWorkInProgressOpen}
        onClose={closeWorkInProgressModal}
      />
    </>
  );
}

export default Header;
