import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charles Awuah Cobbinah — Functional Safety & Risk Analysis Engineer" },
      {
        name: "description",
        content:
          "Functional safety, risk analysis and reliability engineering across autonomous machines, intelligent vehicles, robotics, rail and industrial process plants. HARA · FMEA · FTA · STPA · ISO 26262 · ISO 13849 · IEC 61508 · IEC 62061 · EN 50129 · ARP4761.",
      },
      { property: "og:title", content: "Charles Awuah Cobbinah — Functional Safety & Risk Analysis" },
      { property: "og:description", content: "Risk analysis and safety-critical engineering for autonomous, industrial and transport systems." },
    ],
  }),
  component: Index,
});

const meta = [
  { label: "Discipline", value: "Functional Safety · Risk Analysis", color: "text-cyan-bp" },
  { label: "Domains", value: "Autonomy · Robotics · Rail · Process", color: "text-violet-bp" },
  { label: "Methods", value: "HARA · FMEA · FTA · STPA · LOPA", color: "text-pld" },
  { label: "Status", value: "France · Open to relocation", color: "text-signal" },
];

const navCards = [
  { to: "/about" as const, num: "01", title: "Profile", body: "Approach, philosophy, scope of practice.", accent: "from-cyan-bp/40 to-blueprint/0" },
  { to: "/projects" as const, num: "02", title: "Projects", body: "Selected work — risk artifacts, not just deliverables.", accent: "from-hazard/40 to-signal/0" },
  { to: "/standards" as const, num: "03", title: "Standards", body: "Coverage matrix across automotive, machinery, rail, aero.", accent: "from-violet-bp/40 to-blueprint/0" },
  { to: "/experience" as const, num: "04", title: "Experience", body: "Trajectory across safety, reliability and field service.", accent: "from-pld/40 to-cyan-bp/0" },
];

function Index() {
  return (
    <>
      <header
        className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1280px] flex-col justify-center px-6 py-20 md:px-8"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <span className="radar-sweep" aria-hidden />
        <span className="telemetry-grid" aria-hidden />

        <p className="fade d1 eyebrow mb-7 flex items-center gap-3">
          <span className="inline-block h-px w-12 bg-gradient-to-r from-transparent via-cyan-bp to-transparent" />
          Functional Safety · Risk Analysis · Reliability Engineering
        </p>

        <h1 className="fade d2 mb-7 font-display text-[clamp(2.4rem,7vw,5.6rem)] font-light leading-[1.02] tracking-tight">
          <span className="text-paper">Functional Safety &amp; </span>
          <span className="text-gradient-warm font-normal">Risk Analysis</span>
          <span className="text-paper"> Engineer</span>
          <span className="block mt-2 text-paper/85 text-[0.55em] font-normal tracking-normal">
            for <span className="text-gradient">autonomous machines, intelligent vehicles &amp; industrial systems</span>.
          </span>
        </h1>

        <p className="fade d2 mb-2 max-w-[760px] text-[1.05rem] leading-[1.7] text-paper/75">
          Hazard analysis, FMEA, FTA, STPA, HARA and quantitative reliability work
          for safety-critical systems — from autonomous mobility and robotics to rail
          signalling, oil &amp; gas and industrial process plants.
        </p>

        <div className="fade d3 mt-8 grid max-w-[960px] gap-px rounded-md border border-line bg-line/60 sm:grid-cols-2 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="bg-paper-2 px-5 py-4 font-mono text-[11px]">
              <span className="mb-1.5 block text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                {m.label}
              </span>
              <strong className={`text-[12.5px] font-medium ${m.color}`}>{m.value}</strong>
            </div>
          ))}
        </div>

        <div className="fade d4 mt-10 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">See projects →</Link>
          <a href="/charles-awuah-cobbinah-cv.pdf" download className="btn-primary" style={{ background: "var(--gradient-warm)" }}>Download CV ↓</a>
          <Link to="/contact" className="btn-ghost">Get in touch</Link>
        </div>

        <div className="fade d4 mt-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-ink">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-pld shadow-[0_0_10px] shadow-pld" />
          Available · Apprenticeship & first-position roles
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] border-t border-line px-6 py-20 md:px-8">
        <p className="eyebrow mb-3">Index</p>
        <h2 className="mb-10 font-display text-3xl text-paper md:text-4xl">
          <span className="text-gradient">Navigate the dossier.</span>
        </h2>
        <div className="grid gap-px rounded-lg border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {navCards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative flex flex-col gap-3 overflow-hidden bg-paper-2 p-6 transition-colors hover:bg-[oklch(0.22_0.035_252)]"
            >
              <span
                className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${c.accent}`}
              />
              <span className="relative font-mono text-[11px] tracking-[0.18em] text-hazard">
                {c.num} /
              </span>
              <h3 className="relative font-display text-2xl text-paper">{c.title}</h3>
              <p className="relative text-sm leading-relaxed text-paper/65">{c.body}</p>
              <span className="relative mt-auto font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-bp opacity-0 transition-opacity group-hover:opacity-100">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
