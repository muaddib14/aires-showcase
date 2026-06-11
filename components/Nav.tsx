import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-xs text-accent-pink">▶</span>
          <span className="font-bold tracking-tight">
            <span className="text-accent-green">Aires</span>
            <span className="text-muted">.skills</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#catalog"
            className="font-mono text-xs text-muted transition-colors hover:text-accent-green"
          >
            Catalog
          </Link>
          <Link
            href="/#how-it-works"
            className="hidden font-mono text-xs text-muted transition-colors hover:text-accent-green sm:block"
          >
            How It Works
          </Link>
          <a
            href="https://github.com/Orchestra-Research/AI-Research-SKILLs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-muted transition-all hover:border-accent-green/30 hover:text-accent-green"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
