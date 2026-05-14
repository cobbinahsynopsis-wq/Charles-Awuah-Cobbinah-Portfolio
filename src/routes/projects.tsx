import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHead } from "@/components/section-head";
import { ProjectCard, type ProjectCardProps } from "@/components/project-card";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Charles Awuah Cobbinah" },
      {
        name: "description",
        content:
          "Selected functional safety and risk analysis projects: autonomous tunnel vehicles, FMEA platforms, ABS controllers, process safety.",
      },
      { property: "og:title", content: "Projects — Charles Awuah Cobbinah" },
      { property: "og:description", content: "Risk artifacts, not just deliverables." },
    ],
  }),
  component: Projects,
});

const DOMAINS = ["Rail / Tunnel", "Robotics / Autonomy", "Industrial / Process", "Automotive"] as const;
const METHODS = ["FMEA", "STPA", "HARA", "FTA", "SOTIF", "PL Determination"] as const;

type Domain = (typeof DOMAINS)[number];
type Method = (typeof METHODS)[number];

type Project = ProjectCardProps & { domains: Domain[]; methods: Method[] };

const projects: Project[] = [
  {
    id: "P-01", year: "2026", status: "Active",
    context: "Metalliance — Corail Tunnelier · Bureau d'études",
    title: "Driverless Tunnel Vehicle — Functional Safety & Secure Access Zone",
    intro: "Hazard analysis and safety architecture for an autonomous underground transport vehicle operating in manual / teleoperation / fully autonomous modes. Collaboration with CEA on the autonomy stack.",
    bullets: [
      <>Performed <b>ISO 26262 HARA</b> on electric propulsion safety functions — derived ASIL targets across operating modes and zone contexts.</>,
      <>Defined <b>safe / restricted / hazard zone</b> logic and mode-dependent personnel-detection requirements per ISO 3691-4 §4.2 / §5.1.</>,
      <>Designed redundant <b>LiDAR + Camera + Radar</b> sensing meeting Category 3 / 4 architectural requirements (ISO 13849-1 §6.2.6 / §6.2.7) with sensor diversity for CCF mitigation (Annex F).</>,
      <>Authored safe-state strategies for V2X / teleoperation comms loss — controlled deceleration, emergency stop hand-off, recovery sequence.</>,
      <>Integrated <b>ISO 21448 (SOTIF)</b> reasoning for perception triggering conditions: low-light, dust, occlusion, stationary worker misclassification.</>,
    ],
    tags: [
      { label: "ISO 26262", variant: "iso" }, { label: "ISO 13849-1", variant: "iso" },
      { label: "ISO 3691-4", variant: "iso" }, { label: "ISO 21448", variant: "iso" },
      { label: "HARA · ASIL", variant: "hazard" }, { label: "SOTIF", variant: "hazard" },
      { label: "LiDAR · Radar · Camera" }, { label: "Teleoperation" },
    ],
    domains: ["Rail / Tunnel", "Robotics / Autonomy"],
    methods: ["HARA", "SOTIF", "FTA"],
  },
  {
    id: "P-02", year: "2026", status: "Active",
    context: "Metalliance — Corail Tunnelier",
    title: "Standard Tunnel Vehicle — Risk Analysis Platform",
    intro: "A digital risk analysis platform for the conventional tunnel machine fleet — replacing scattered worksheets with structured, traceable engineering evidence.",
    bullets: [
      <>Built FMEA workflows across <b>braking, steering, fire, propulsion, and tilt</b> subsystems — 200+ failure modes with severity / occurrence / detection scoring and Action Priority logic (AIAG-VDA 2019).</>,
      <>Defined <b>24 safety functions</b> with required Performance Level (PLr) per ISO 13849-1 Annex A — covering personnel detection, obstacle avoidance, zone speed enforcement, emergency stop.</>,
      <>Generated risk heatmaps and automated engineering reports for cross-domain reviews.</>,
      <>Aligned platform logic with <b>ISO 12100</b>, <b>ISO 13849-1</b>, and <b>NFPA 502</b> where FMEA scope crosses fire / propulsion boundaries.</>,
    ],
    tags: [
      { label: "ISO 12100", variant: "iso" }, { label: "ISO 13849-1", variant: "iso" },
      { label: "ISO 3691-4", variant: "iso" }, { label: "NFPA 502", variant: "iso" },
      { label: "FMEA · AP", variant: "hazard" }, { label: "PL Determination", variant: "hazard" },
      { label: "Tunnel Machinery" },
    ],
    domains: ["Rail / Tunnel", "Industrial / Process"],
    methods: ["FMEA", "PL Determination"],
  },
  {
    id: "P-03", year: "2024", status: "Quantum",
    context: "Quantum Terminals Ltd · Oil & Gas · Tema, Ghana",
    title: "Maintenance Reliability & Process Safety",
    bullets: [
      <>Applied FMEA to identify and mitigate process risks: butane / propane tank temperature control and loading hose failure modes.</>,
      <>Supervised construction of a 5 km, 12-inch hydrogen pipeline with verified ASME / EN compliance, including a 3000 MT spherical storage tank.</>,
      <>Led decommissioning / recommissioning of a 600 m³ butane bullet tank with full validation and risk reassessment.</>,
    ],
    tags: [{ label: "FMEA" }, { label: "Process Safety" }, { label: "ASME · EN" }],
    domains: ["Industrial / Process"],
    methods: ["FMEA"],
  },
  {
    id: "P-04", year: "2025", status: "Academic",
    context: "ISAT Nevers · Polytech Orléans",
    title: "Sliding-Mode ABS Controller & 14-DOF Vehicle Dynamics",
    bullets: [
      <>14-DOF full-vehicle Simulink model with sliding-mode ABS controller; validated on 100→0 km/h panic stops over low-μ surfaces.</>,
      <>Predicted thermal fade under repeated 0.7g deceleration and quantified controller robustness against tyre parameter drift.</>,
      <>Powertrain energy-loss study on roller bench using AMESim to identify dominant dissipation paths.</>,
    ],
    tags: [{ label: "MATLAB · Simulink" }, { label: "AMESim" }, { label: "Vehicle Dynamics" }],
    domains: ["Automotive"],
    methods: ["STPA", "FMEA"],
  },
];

function FilterChip({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition-all " +
        (active
          ? "border-cyan-bp/70 bg-cyan-bp/15 text-cyan-bp shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-cyan-bp)_30%,transparent)]"
          : "border-line bg-paper-2 text-paper/60 hover:border-cyan-bp/40 hover:text-paper/90")
      }
    >
      {label}
    </button>
  );
}

function Projects() {
  const [activeDomains, setActiveDomains] = useState<Set<Domain>>(new Set());
  const [activeMethods, setActiveMethods] = useState<Set<Method>>(new Set());

  const toggle = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value); else next.add(value);
    return next;
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const dOk = activeDomains.size === 0 || p.domains.some((d) => activeDomains.has(d));
      const mOk = activeMethods.size === 0 || p.methods.some((m) => activeMethods.has(m));
      return dOk && mOk;
    });
  }, [activeDomains, activeMethods]);

  const clearAll = () => { setActiveDomains(new Set()); setActiveMethods(new Set()); };
  const hasFilters = activeDomains.size + activeMethods.size > 0;

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-24">
      <SectionHead num="02 / Projects" kicker="Selected work" title="Risk artifacts, not just deliverables." />

      <div className="surface-card mb-8 p-5 md:p-6">
        <div className="grid gap-5 md:grid-cols-[140px_1fr] md:gap-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
            <span className="bg-[image:var(--gradient-cool)] bg-clip-text font-bold text-transparent">Filter</span>
            <br />Domain
          </div>
          <div className="flex flex-wrap gap-2">
            {DOMAINS.map((d) => (
              <FilterChip
                key={d}
                label={d}
                active={activeDomains.has(d)}
                onClick={() => setActiveDomains((s) => toggle(s, d))}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-5 md:grid-cols-[140px_1fr] md:gap-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">Method</div>
          <div className="flex flex-wrap gap-2">
            {METHODS.map((m) => (
              <FilterChip
                key={m}
                label={m}
                active={activeMethods.has(m)}
                onClick={() => setActiveMethods((s) => toggle(s, m))}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-ink">
          <span>
            Showing <span className="text-cyan-bp">{filtered.length}</span> / {projects.length}
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="text-paper/70 underline-offset-4 hover:text-cyan-bp hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {filtered.length === 0 ? (
          <div className="surface-card p-10 text-center font-mono text-[12px] uppercase tracking-[0.1em] text-muted-ink">
            No projects match the selected filters.
          </div>
        ) : (
          filtered.map((p) => <ProjectCard key={p.id} {...p} />)
        )}
      </div>
    </section>
  );
}
