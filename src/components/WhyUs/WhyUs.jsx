const advantages = [
  { icon: 'idea', title: 'Creative ideas', text: 'Fresh thinking for every challenge.' },
  { icon: 'team', title: 'Expert team', text: 'The right people for your project.' },
  { icon: 'quality', title: 'Quality work', text: 'Care in every little detail.' },
  { icon: 'time', title: 'On-time delivery', text: 'A clear plan from day one.' },
  { icon: 'support', title: 'Great support', text: 'Here whenever you need us.' },
];

function AdvantageIcon({ name }) {
  const paths = {
    idea: (
      <>
        <path d="M9 18h6m-5 3h4m-2-20a7 7 0 0 0-4 12.75c.55.38 1 1.03 1 1.75h6c0-.72.45-1.37 1-1.75A7 7 0 0 0 12 1Z" />
        <path d="M12 4v2m-5 2 1.5 1m7 0L17 8" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-1a6 6 0 0 1 12 0v1H3Zm12-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 4 5v1h-3" />
      </>
    ),
    quality: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m8.5 12 2.3 2.3 4.7-5" />
      </>
    ),
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-6H4Zm16 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6h1Zm0 6a5 5 0 0 1-5 3h-2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      {paths[name]}
    </svg>
  );
}

function WhyUs() {
  return (
    <section id="advantages" className="bg-white px-5 py-11 sm:py-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-7 text-center sm:mb-9">
          <h2 className="text-xl font-extrabold uppercase text-ink sm:text-2xl">
            Our advantages
          </h2>
          <span className="mx-auto mt-3 block h-1 w-10 bg-accent" />
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 min-[520px]:grid-cols-3 lg:grid-cols-5">
          {advantages.map((item) => (
            <article key={item.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f3f1] text-brand-dark sm:h-14 sm:w-14">
                <AdvantageIcon name={item.icon} />
              </span>
              <h3 className="mt-3 text-[10px] font-extrabold uppercase leading-4 text-ink sm:text-xs">
                {item.title}
              </h3>
              <p className="mx-auto mt-1 max-w-36 text-[9px] leading-4 text-ink-muted sm:text-[10px]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
