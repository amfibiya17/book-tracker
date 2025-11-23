import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-6 mt-8">
      <nav>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/yaroslava-yates-629517221/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center
                       text-base-content/60 hover:text-primary
                       transition-colors"
          >
            <LinkedInIcon className="h-8 w-8 fill-current" />
          </a>

          <a
            href="https://github.com/amfibiya17"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center
                       text-base-content/60 hover:text-primary
                       transition-colors"
          >
            <GithubIcon className="h-8 w-8 fill-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
