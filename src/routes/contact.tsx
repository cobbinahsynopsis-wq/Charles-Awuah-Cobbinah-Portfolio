import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Charles Awuah Cobbinah" },
      { name: "description", content: "Available for apprenticeship and first-position roles in functional safety." },
      { property: "og:title", content: "Contact — Charles Awuah Cobbinah" },
      { property: "og:description", content: "Get in touch about safety, risk and autonomous machinery roles." },
    ],
  }),
  component: Contact,
});

const lines = [
  { k: "Email", v: "cobbinahsynopsis@gmail.com", href: "mailto:cobbinahsynopsis@gmail.com" },
  { k: "Phone", v: "+33 7 45 38 47 21", href: "tel:+33745384721" },
  { k: "LinkedIn", v: "/charlesawuahcobbinah", href: "https://www.linkedin.com/in/charlesawuahcobbinah" },
  { k: "CV", v: "Download PDF ↓", href: "/charles-awuah-cobbinah-cv.pdf" },
  { k: "Location", v: "Montceau-les-Mines · France" },
];

function Contact() {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-5">05 / Contact</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.05]">
            <span className="text-paper">Looking for a </span>
            <em className="italic text-gradient-warm">safety analyst</em>
            <span className="text-paper"> who cites clause numbers?</span>
          </h1>
          <p className="mt-5 max-w-[480px] leading-[1.7] text-paper/65">
            Available for apprenticeship and first-position roles in functional safety and
            operational risk for autonomous machinery — automotive, rail, mining, or industrial.
          </p>
          <div className="mt-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-pld">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-pld shadow-[0_0_10px] shadow-pld" />
            Currently accepting offers
          </div>
        </div>

        <ul className="surface-card overflow-hidden rounded-md">
          {lines.map((l) => (
            <li
              key={l.k}
              className="flex items-center justify-between gap-4 border-b border-line/70 px-5 py-4 font-mono text-[13px] last:border-b-0"
            >
              <span className="text-[10px] uppercase tracking-[0.15em] text-cyan-bp">{l.k}</span>
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener" : undefined}
                  className="text-paper transition-colors hover:text-signal"
                >
                  {l.v}
                </a>
              ) : (
                <span className="text-paper">{l.v}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
