function About() {
  return (
    <section id="about" className="bg-[#f5f5f3] px-5 py-14 sm:py-18">
      <div className="mx-auto grid max-w-[1100px] items-center gap-9 md:grid-cols-2 md:gap-14">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">A LITTLE ABOUT US</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase leading-tight text-ink sm:text-4xl">
            About <span className="text-brand-dark">us</span>
          </h2>
          <span className="mt-4 block h-1 w-12 bg-accent" />
          <p className="mt-5 text-sm font-semibold leading-6 text-ink">
            We&apos;re a close-knit team of creative thinkers, makers and
            problem-solvers.
          </p>
          <p className="mt-3 text-xs leading-6 text-ink-muted sm:text-sm">
            We bring strategy, design and technology together to help good
            businesses grow. From the first conversation to launch day, we work
            alongside you to make sure every detail feels right and every idea
            has a purpose.
          </p>
          <a href="#services" className="mt-5 inline-flex bg-accent px-5 py-2.5 text-[10px] font-extrabold text-ink transition hover:bg-[#ffd04f]">
            MORE ABOUT US <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden bg-[#e4eadb] sm:h-72">
          <div className="absolute right-10 top-7 h-20 w-20 rounded-full bg-accent/80" />
          <div className="absolute bottom-0 left-6 h-36 w-14 bg-[#c1d1a7]" />
          <div className="absolute bottom-0 left-14 h-48 w-20 bg-white/80 shadow-sm">
            <span className="absolute left-3 top-5 h-2 w-12 bg-brand/50" />
            <span className="absolute left-3 top-10 h-2 w-9 bg-gray-200" />
            <span className="absolute bottom-6 left-3 h-16 w-3 bg-accent" />
            <span className="absolute bottom-6 left-8 h-24 w-3 bg-brand" />
            <span className="absolute bottom-6 left-[52px] h-12 w-3 bg-[#789d41]" />
          </div>
          <div className="absolute bottom-0 right-8 h-32 w-24 rounded-t-[48px] bg-[#658a3d]">
            <div className="absolute -top-8 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-[#d4a17a]" />
            <div className="absolute top-6 left-1/2 h-24 w-[84px] -translate-x-1/2 rounded-t-[45px] bg-[#383d35]" />
          </div>
          <div className="absolute bottom-0 right-0 h-20 w-8 bg-[#b4c893]" />
          <span className="absolute left-5 top-7 text-2xl text-brand-dark" aria-hidden="true">✳</span>
          <div className="absolute bottom-4 left-1/2 bg-white/90 px-4 py-2 shadow">
            <p className="text-[9px] font-extrabold tracking-widest text-ink">GOOD IDEAS, MADE TOGETHER</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
