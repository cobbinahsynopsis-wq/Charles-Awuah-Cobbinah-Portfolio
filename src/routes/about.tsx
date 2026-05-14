import { createFileRoute } from "@tanstack/react-router";
import { SectionHead } from "@/components/section-head";
import portrait from "@/assets/charles-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Charles Awuah Cobbinah" },
      {
        name: "description",
        content:
          "How I approach functional safety and operational risk for autonomous tunnel machinery — citing clauses, not vibes.",
      },
      { property: "og:title", content: "About — Charles Awuah Cobbinah" },
      { property: "og:description", content: "Approach, philosophy, and scope of practice in functional safety." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-8 md:py-24">
      <SectionHead
        num="01 / Profile"
        kicker="About"
        title="I build the safety case for machines that move people without a driver."
      />

      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-md surface-card glow-ring">
            <img
              src={portrait}
              alt="Portrait of Charles Awuah Cobbinah"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="label-mono">Summary</div>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-[1.75] text-paper/80">
          <p>
            I work on the system safety and operational risk of{" "}
            <strong className="font-medium text-cyan-bp">autonomous machines and intelligent vehicles</strong> —
            from driverless industrial trucks and tunnel shuttles to robotics, mining equipment,
            rail signalling and ADAS-equipped road vehicles operating across mixed manual,
            supervised and fully autonomous modes.
          </p>
          <p>
            My focus: turning complex sensor architectures (LiDAR, radar, camera, AGS, V2X,
            teleoperation) and operational scenarios into{" "}
            <strong className="font-medium text-hazard">defensible safety arguments</strong> — HARA
            worksheets, safety functions with PLr / ASIL / SIL targets, redundant fail-safe
            architectures with CCF mitigation, and safe-state strategies that survive comms loss
            where there is no fallback driver.
          </p>
          <p>
            I cite clauses, not vibes. I cross-reference automotive (ISO 26262 / 21448) with
            machinery (ISO 13849 / 12100 / 3691-4 / IEC 62061), rail (EN 50129) and aerospace
            (ARP4761) when the failure logic demands it.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {[
          { k: "Standards working", v: "9+", c: "text-cyan-bp", b: "from-cyan-bp to-blueprint" },
          { k: "Safety functions defined", v: "24", c: "text-hazard", b: "from-hazard to-signal" },
          { k: "Failure modes scored", v: "200+", c: "text-pld", b: "from-pld to-cyan-bp" },
        ].map((s) => (
          <div key={s.k} className="surface-card relative overflow-hidden p-7">
            <span className={`absolute left-0 top-0 h-1 w-16 bg-gradient-to-r ${s.b}`} />
            <p className={`font-display text-5xl ${s.c}`}>{s.v}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-ink">
              {s.k}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
