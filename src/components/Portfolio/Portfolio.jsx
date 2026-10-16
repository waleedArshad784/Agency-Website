const projects = [
  { name: 'Urban Living', type: 'Brand identity', color: 'from-[#ded3bb] to-[#8e9a72]', mark: 'UL' },
  { name: 'North Studio', type: 'Web design', color: 'from-[#d4e4dc] to-[#78948e]', mark: 'N°' },
  { name: 'Good Habit', type: 'Packaging', color: 'from-[#f2d5ac] to-[#bb7653]', mark: 'GOOD.' },
  { name: 'Forma Works', type: 'Brand identity', color: 'from-[#d9d9df] to-[#777b8a]', mark: 'F' },
  { name: 'Wildflower', type: 'Campaign', color: 'from-[#d1d9ba] to-[#84955b]', mark: 'wild' },
  { name: 'Sunday Supply', type: 'E-commerce', color: 'from-[#ead8cb] to-[#bb8a6b]', mark: 'S.' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#222] px-5 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-light">A FEW RECENT PROJECTS</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">Our portfolio</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {projects.map((project) => (
            <a key={project.name} href="#contact" className="group relative aspect-[1.15] overflow-hidden bg-gray-700">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition duration-500 group-hover:scale-105`} />
              <div className="absolute inset-3 flex flex-col items-center justify-center border border-white/50 text-center sm:inset-5">
                <span className="font-serif text-3xl font-bold tracking-tight text-white drop-shadow sm:text-5xl">
                  {project.mark}
                </span>
                <span className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-white/90 sm:text-[10px]">
                  {project.type}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand/95 px-4 py-3 transition-transform group-hover:translate-y-0">
                <p className="text-xs font-extrabold uppercase tracking-wide">{project.name}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a href="#contact" className="inline-block border border-white/40 px-6 py-3 text-[10px] font-extrabold tracking-widest transition hover:border-brand hover:bg-brand">
            VIEW ALL PROJECTS <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
