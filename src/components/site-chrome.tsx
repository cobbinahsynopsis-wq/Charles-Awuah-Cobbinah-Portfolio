import { Link } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "01 / About" },
  { to: "/projects", label: "02 / Projects" },
  { to: "/standards", label: "03 / Standards" },
  { to: "/experience", label: "04 / Experience" },
  { to: "/contact", label: "05 / Contact" },
] as const;

export function SiteHeader() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line/70 bg-ink/70 px-5 py-3.5 backdrop-blur-xl md:px-8">
      <Link to="/" className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-paper">
        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-hazard shadow-[0_0_12px] shadow-hazard" />
        <span className="text-gradient">CHARLES</span>
        <span className="hidden text-paper/70 sm:inline">A. COBBINAH</span>
      </Link>
      <ul className="flex items-center gap-2 md:gap-1">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="rounded-md px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-paper/70 transition-colors hover:bg-paper-2 hover:text-cyan-bp md:px-3 md:text-[11px] md:tracking-[0.12em]"
              activeProps={{ className: "bg-paper-2 text-cyan-bp" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/charles-awuah-cobbinah-cv.pdf"
            download
            className="ml-1 rounded-md border border-cyan-bp/40 px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-cyan-bp transition-colors hover:bg-cyan-bp/10 md:px-3 md:text-[11px] md:tracking-[0.12em]"
          >
            CV ↓
          </a>
        </li>
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink px-8 py-7 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
      <span className="text-paper/80">© 2026 · Charles Awuah Cobbinah</span>
      <span className="mx-3 text-line">/</span>
      <span className="text-gradient">Ready to work</span>
    </footer>
  );
}
