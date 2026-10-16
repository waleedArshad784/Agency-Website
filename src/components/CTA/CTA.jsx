function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand px-5 py-12 text-white sm:py-16">
      <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.25em] text-white/75">HAVE A GREAT IDEA?</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">Start your new project</h2>
          <p className="mt-2 text-sm text-white/85">Tell us what you&apos;re dreaming up. We&apos;d love to hear about it.</p>
        </div>
        <a href="#contact" className="shrink-0 bg-accent px-7 py-3.5 text-xs font-extrabold tracking-wide text-ink shadow transition hover:-translate-y-0.5 hover:bg-[#ffd04f]">
          GET IN TOUCH <span className="ml-2" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default CTA;
