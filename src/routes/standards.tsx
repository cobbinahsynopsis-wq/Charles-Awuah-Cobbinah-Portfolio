import { createFileRoute } from "@tanstack/react-router";
import { SectionHead } from "@/components/section-head";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [
      { title: "Standards — Charles Awuah Cobbinah" },
      {
        name: "description",
        content:
          "Coverage matrix across ISO 26262, 21448, 13849, 12100, 3691-4, IEC 62061, NFPA 502, EN 50129, ARP4761.",
      },
      { property: "og:title", content: "Standards Coverage Matrix" },
      { property: "og:description", content: "What I work with, and where." },
    ],
  }),
  component: Standards,
});

const rows = [
  { std: "ISO 26262", scope: "Functional safety of road vehicle E/E systems — HARA, ASIL determination, safety goals.", app: "P-01 (propulsion HARA)", level: "Active" },
  { std: "ISO 21448", scope: "SOTIF — performance limitations of perception & nominal function under triggering conditions.", app: "P-01 (LiDAR/camera/radar)", level: "Active" },
  { std: "ISO 13849-1", scope: "Safety of machinery — PLr determination, Category 1–4, MTTFD, DC, CCF.", app: "P-01, P-02 (24 SFs)", level: "Active" },
  { std: "ISO 12100", scope: "General machine risk assessment principles & iterative risk reduction.", app: "P-02 (platform logic)", level: "Active" },
  { std: "ISO 3691-4", scope: "Driverless industrial trucks — operating zones, personnel detection field requirements.", app: "P-01, P-02 (zone logic)", level: "Active" },
  { std: "IEC 62061", scope: "Functional safety of safety-related E/E control systems — SIL approach for machinery.", app: "Working knowledge", level: "Reading" },
  { std: "NFPA 502", scope: "Road tunnels — fire protection, ventilation, life safety.", app: "P-02 (fire boundary)", level: "Applied" },
];

const levelClass = (l: string) =>
  l === "Active"
    ? "text-pld border-pld/40 bg-pld/10"
    : l === "Applied"
      ? "text-signal border-signal/40 bg-signal/10"
      : "text-muted-ink border-line bg-paper-2";

function Standards() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-24">
      <SectionHead num="03 / Standards" kicker="Coverage matrix" title="What I work with, and where." />

      <div className="surface-card overflow-hidden rounded-md">
        <div className="hidden grid-cols-[160px_1fr_220px_110px] border-b border-line bg-ink/60 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-bp md:grid">
          <div className="border-r border-line px-4 py-3.5">Standard</div>
          <div className="border-r border-line px-4 py-3.5">Scope</div>
          <div className="border-r border-line px-4 py-3.5">Applied in</div>
          <div className="px-4 py-3.5">Level</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.std}
            className="group grid grid-cols-[110px_1fr] border-b border-line/70 font-mono text-[12px] transition-colors last:border-b-0 hover:bg-paper-2/60 md:grid-cols-[160px_1fr_220px_110px]"
          >
            <div className="border-r border-line/70 px-4 py-4 font-bold">
              <span className="bg-[image:var(--gradient-cool)] bg-clip-text text-transparent">{r.std}</span>
            </div>
            <div className="border-r border-line/70 px-4 py-4 font-sans text-[13px] leading-relaxed text-paper/80">
              {r.scope}
            </div>
            <div className="hidden border-r border-line/70 px-4 py-4 text-muted-ink md:block">{r.app}</div>
            <div className="hidden px-4 py-4 md:block">
              <span className={`inline-block rounded-sm border px-2 py-0.5 text-[10px] uppercase tracking-wider ${levelClass(r.level)}`}>
                {r.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="eyebrow mb-3">04 / Toolbox</p>
        <h2 className="mb-10 font-display text-3xl text-gradient">Methods, software, languages.</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((c, i) => (
            <div key={c.h} className="surface-card relative overflow-hidden p-6">
              <span
                className={`absolute left-0 top-0 h-1 w-16 bg-gradient-to-r ${
                  ["from-cyan-bp to-blueprint", "from-hazard to-signal", "from-violet-bp to-blueprint", "from-pld to-cyan-bp"][i % 4]
                }`}
              />
              <h3 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-cyan-bp">
                {c.h}
              </h3>
              <ul>
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-dotted border-line py-1.5 text-[0.95rem] text-paper/85 last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const toolbox = [
  { h: "Methods", items: ["HARA · ASIL determination", "FMEA / AMDEC · AP & RPN", "Fault Tree Analysis (FTA)", "Preliminary Hazard Analysis", "PLr · ISO 13849 Annex A", "Safe-state & degraded mode", "CCF · ISO 13849 Annex F", "STPA — system-theoretic"] },
  { h: "Domains", items: ["Autonomous vehicles & ADAS", "Robotics & industrial automation", "Mining & tunnel machinery", "Rail signalling & ITS", "Sensor fusion & perception", "Teleoperation & V2X", "Process safety (oil & gas)"] },
  { h: "Software", items: ["MATLAB · Simulink", "Stateflow · Simscape", "AMESim", "Capella (Arcadia / MBSE)", "Python · NumPy · Pandas", "Star-CCM+", "CAN tooling · CANoe"] },
  { h: "Languages", items: ["English — C2 Native", "French — B2 Intermediate"] },
];
