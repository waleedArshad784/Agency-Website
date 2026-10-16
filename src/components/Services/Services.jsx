const services = [
  { icon: '✦', title: 'Brand identity', description: 'A distinctive brand system that tells your story and makes the right first impression.' },
  { icon: '▧', title: 'Web design', description: 'Beautiful, thoughtful websites designed around real people and business goals.' },
  { icon: '◉', title: 'Digital marketing', description: 'Smart campaigns that connect you with the people ready to find you.' },
];

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">WHAT WE DO</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">Our services</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="group relative border border-gray-100 bg-[#fafafa] p-7 pt-9 text-center transition hover:-translate-y-1 hover:shadow-xl">
              <span className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-ink shadow">
                0{index + 1}
              </span>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand text-2xl text-brand-dark transition group-hover:bg-brand group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="mt-4 text-base font-extrabold uppercase text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{service.description}</p>
              <a href="#contact" className="mt-5 inline-block text-[10px] font-extrabold tracking-widest text-brand-dark hover:text-ink">
                FIND OUT MORE <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
