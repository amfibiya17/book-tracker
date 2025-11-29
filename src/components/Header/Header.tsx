import HeaderIcon from "./HeaderIcon";

function Header() {
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
          href="/"
          className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
          aria-label="Go to Book Board home"
        >
          <span className="hidden min-[400px]:inline text-2xl font-semibold tracking-tight">
            Book Board
          </span>

          <HeaderIcon className="h-8 w-8 mb-1" />
        </a>

        <div className="flex flex-wrap gap-3">
          <a
            href="/option-1"
            className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
            aria-label="Go to Option 1"
          >
            Option 1
          </a>
          <a
            href="/option-2"
            className="btn btn-sm bg-transparent text-base-100 shadow-none hover:text-primary hover:border-primary"
            aria-label="Go to Option 2"
          >
            Option 2
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
