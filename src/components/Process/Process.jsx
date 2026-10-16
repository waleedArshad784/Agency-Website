const steps = [
  ['⌕', 'Discover', 'We listen and learn what makes your business tick.'],
  ['▤', 'Plan', 'Together we set a clear direction and roadmap.'],
  ['✦', 'Create', 'We turn the strategy into thoughtful, original work.'],
  ['✓', 'Refine', 'We share, listen and polish every detail with you.'],
  ['↗', 'Launch', 'Everything goes live, ready to make a difference.'],
  ['♡', 'Grow', 'We help you build on the momentum.'],
];

function Process() {
  return (
    <section className="bg-[#f6f6f4] px-5 py-14 sm:py-18">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto mb-9 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">SIMPLE, COLLABORATIVE, EFFECTIVE</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">Our process</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>
        <div className="grid gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map(([icon, title, description], index) => (
            <article key={title} className="relative text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand/50 bg-white text-xl text-brand-dark shadow-sm">
                {icon}
              </span>
              <span className="mt-3 block text-[9px] font-extrabold tracking-widest text-brand-dark">STEP 0{index + 1}</span>
              <h3 className="mt-1 text-xs font-extrabold uppercase text-ink">{title}</h3>
              <p className="mt-2 text-[10px] leading-5 text-ink-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
