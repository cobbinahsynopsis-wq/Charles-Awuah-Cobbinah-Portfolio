type Props = {
  num: string;
  title: React.ReactNode;
  kicker?: string;
};

export function SectionHead({ num, title, kicker }: Props) {
  return (
    <header className="mb-12 grid gap-3 border-b border-line pb-10 md:mb-16 md:grid-cols-[160px_1fr] md:gap-8">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] md:pt-3">
        <span className="bg-gradient-warm bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
          {num}
        </span>
      </div>
      <div>
        {kicker ? <p className="eyebrow mb-3">{kicker}</p> : null}
        <h1 className="font-display text-[clamp(1.9rem,4.6vw,3.6rem)] font-light leading-[1.05]">
          <span className="text-gradient">{title}</span>
        </h1>
      </div>
    </header>
  );
}
