function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand px-5 py-16 text-center text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-[10px] font-extrabold tracking-[0.24em] text-white/85 sm:text-xs">
          CREATIVE THINKING. MEANINGFUL RESULTS.
        </p>
        <h1 className="mt-4 whitespace-nowrap text-[clamp(1.2rem,8vw,3.75rem)] font-extrabold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          We are experts
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-white/90 sm:text-sm sm:leading-7">
          We help ambitious businesses build stronger brands and better digital
          experiences. Ideas that make a difference, made together.
        </p>
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 text-[10px] font-extrabold tracking-wide text-ink shadow transition hover:-translate-y-0.5 hover:bg-[#ffd04f] sm:mt-8 sm:px-7 sm:py-3.5 sm:text-xs"
        >
          DISCOVER MORE <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
