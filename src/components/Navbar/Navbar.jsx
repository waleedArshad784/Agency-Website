import { useState } from 'react';

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Contact', '#contact'],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-[#202020] text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-2 text-[11px]">
          <div className="flex items-center gap-3" aria-label="Social media">
            {['f', 'in', '◎', '▶'].map((item) => (
              <a
                key={item}
                href="#contact"
                aria-label={`Visit our ${item} page`}
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 font-bold transition hover:bg-brand"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-brand-light" href="tel:+1234567890">
              <span className="mr-1 text-brand-light">☎</span> +1 (234) 567-890
            </a>
            <a className="hidden transition hover:text-brand-light sm:inline-flex" href="mailto:hello@nexgen.agency">
              <span className="mr-1 text-brand-light">✉</span> hello@nexgen.agency
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-2" aria-label="Nexgen home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-white">
            N
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            NEX<span className="text-brand-dark">GEN</span>
            <span className="block text-[8px] font-semibold tracking-[0.2em] text-ink-muted">
              CREATIVE AGENCY
            </span>
          </span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-ink md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-xl">{menuOpen ? '×' : '☰'}</span>
        </button>

        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 border-t border-gray-100 bg-white px-5 py-3 shadow-md md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-xs font-bold uppercase tracking-wide text-ink-muted transition hover:text-brand-dark md:py-3"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 bg-brand px-5 py-3 text-center text-xs font-extrabold text-white transition hover:bg-brand-dark md:mt-0"
          >
            LET&apos;S TALK
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
