import { createFileRoute } from "@tanstack/react-router";
import { SectionHead } from "@/components/section-head";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Charles Awuah Cobbinah" },
      { name: "description", content: "Career trajectory across functional safety, maintenance reliability, and field service." },
      { property: "og:title", content: "Experience — Charles Awuah Cobbinah" },
      { property: "og:description", content: "Trajectory across safety, reliability and field service." },
    ],
  }),
  component: Experience,
});

const rows = [
  {
    when: "Feb 2026 — Present",
    title: "Machine Risk Analysis & Safety Intern (Bureau d'Études)",
    org: "Metalliance — Corail Tunnelier · Saint-Vallier, FR",
    bullets: [
      "Risk analysis and definition of a secure access zone for an autonomous tunnel machine.",
      "Hazard identification across operating modes and restricted zones.",
      "Redundant sensing architecture for PLd / PLe safety functions.",
      "Safe-state design for autonomous propulsion.",
    ],
    color: "bg-pld shadow-pld",
  },
  {
    when: "Feb 2024 — Aug 2024",
    title: "Maintenance Reliability Engineer",
    org: "Quantum Terminals Ltd — Oil & Gas · Tema, Ghana",
    bullets: [
      "Proactively applied FMEA to identify and mitigate risks — controlling butane / propane tank temperatures, preventing loading hose ruptures, and minimizing equipment breakdowns to ensure uninterrupted loading operations.",
      "Developed and updated detailed technical documentation for maintenance procedures on centrifugal pumps, air compressors, deluge pumps and valve systems with ISO standardization.",
    ],
    color: "bg-cyan-bp shadow-cyan-bp",
  },
  {
    when: "Apr 2022 — Jan 2024",
    title: "Field Service Engineer",
    org: "BlackCAD Engineering and Logistics · Tarkwa, Ghana",
    bullets: [
      "Validated engine performance and powertrain calibration post-rebuild through dynamometer testing and data analysis, ensuring compliance with performance specifications.",
      "Conducted diagnostic inspections and ensured proper functioning of test equipment and mechanical systems in field operations (engine and powertrain diagnostics).",
    ],
    color: "bg-violet-bp shadow-violet-bp",
  },
  {
    when: "May 2021 — Nov 2021",
    title: "Vehicle Assembly Intern",
    org: "Toyota Tsusho Production Ghana · Tarkwa, Ghana",
    bullets: [
      "Supported process documentation and quality record-keeping to maintain traceability and adherence to standardized manufacturing procedures.",
      "Executed quality validation tests on assembled vehicle components under supervisor guidance, ensuring compliance with functional specifications and ISO 9001 standards.",
    ],
    color: "bg-hazard shadow-hazard",
  },
];

const education = [
  {
    when: "2025 — Present",
    title: "MSc · Automotive Engineering for Sustainable Mobility (M2)",
    org: "Institut Supérieur de l'Automobile et des Transports (ISAT) · Nevers, France",
  },
  {
    when: "2024 — 2025",
    title: "MSc · Automotive Engineering for Sustainable Mobility (M1)",
    org: "Polytech Orléans · Orléans, France",
  },
  {
    when: "Graduated",
    title: "B.Tech · Automobile Engineering",
    org: "Takoradi Technical University · Takoradi, Ghana",
  },
];

function Experience() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-24">
      <SectionHead num="04 / Experience" kicker="Trajectory" title="Where the work happened." />

      <div className="relative md:pl-8">
        <span className="absolute left-2 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-bp/60 via-blueprint/40 to-violet-bp/0 md:block" />
        {rows.map((r, i) => (
          <article
            key={i}
            className="surface-card relative mb-5 grid gap-4 p-6 md:grid-cols-[200px_1fr] md:gap-8 md:p-7"
          >
            <span
              className={`absolute -left-[22px] top-9 hidden h-3 w-3 rounded-full ring-4 ring-ink md:block ${r.color} shadow-[0_0_12px]`}
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-bp">
              {r.when}
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-paper md:text-[1.4rem]">
                {r.title}
              </h3>
              <p className="mb-3 font-mono text-[12px] text-hazard">{r.org}</p>
              <ul className="mt-1 max-w-[72ch] list-disc space-y-2 pl-5 text-[0.96rem] leading-[1.7] text-paper/75 marker:text-cyan-bp">
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <SectionHead num="04.2 / Education" kicker="Academic" title="Education." />
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <article key={i} className="surface-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-bp">
                {e.when}
              </div>
              <h3 className="mt-3 font-display text-lg font-medium text-paper">{e.title}</h3>
              <p className="mt-2 font-mono text-[12px] text-hazard">{e.org}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
