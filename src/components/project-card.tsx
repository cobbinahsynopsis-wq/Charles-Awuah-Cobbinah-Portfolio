import { type ReactNode } from "react";

export type ProjectTag = { label: string; variant?: "iso" | "hazard" | "default" };

export type ProjectCardProps = {
  id: string;
  year: string;
  status: string;
  context: string;
  title: string;
  intro?: string;
  bullets: ReactNode[];
  tags: ProjectTag[];
};

export function ProjectCard(p: ProjectCardProps) {
  return (
    <article className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring md:p-8">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-bp/60 to-transparent opacity-60" />

      <div className="grid gap-6 md:grid-cols-[160px_1fr] md:gap-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
          <span className="mb-1 block bg-[image:var(--gradient-cool)] bg-clip-text text-[14px] font-bold text-transparent">
            {p.id}
          </span>
          {p.year} ·<br />
          <span className="text-pld">{p.status}</span>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em] text-cyan-bp/80">
            {p.context}
          </p>
          <h3 className="font-display text-[1.6rem] font-normal leading-[1.15] text-paper md:text-[1.85rem]">
            {p.title}
          </h3>
          {p.intro ? (
            <p className="mt-3 max-w-[68ch] text-[0.98rem] leading-[1.65] text-paper/70">
              {p.intro}
            </p>
          ) : null}
          <ul className="mt-5 space-y-1.5">
            {p.bullets.map((b, i) => (
              <li
                key={i}
                className="relative max-w-[72ch] py-1 pl-6 text-[0.96rem] leading-[1.6] text-paper/85 before:absolute before:left-0 before:top-1.5 before:text-[0.85rem] before:text-hazard before:content-['▸']"
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t.label}
                className={
                  "rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide " +
                  (t.variant === "hazard"
                    ? "border-hazard/50 bg-hazard/10 text-hazard"
                    : t.variant === "iso"
                      ? "border-blueprint/50 bg-blueprint/10 text-cyan-bp"
                      : "border-line bg-paper-2 text-paper/75")
                }
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
