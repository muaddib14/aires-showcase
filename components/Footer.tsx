import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-accent-pink">▶</span>
          <span className="font-bold">
            <span className="text-accent-green">Aires</span>
            <span className="text-muted">.skills</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-muted">
          <Link
            href="/#catalog"
            className="transition-colors hover:text-accent-green"
          >
            Catalog
          </Link>
          <Link
            href="/#how-it-works"
            className="transition-colors hover:text-accent-green"
          >
            How It Works
          </Link>
          <a
            href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-green"
          >
            GitHub
          </a>
          <a
            href="https://claudefinance.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-pink"
          >
            Wealth.id
          </a>
        </div>

        <p className="font-mono text-xs text-muted/50">
          Unofficial showcase · MIT License
        </p>
      </div>
    </footer>
  );
}
