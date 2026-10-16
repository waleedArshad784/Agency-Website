const footerLinks = [
  { title: 'Explore', links: [['About us', '#about'], ['Our services', '#services'], ['Portfolio', '#portfolio']] },
  { title: 'Get in touch', links: [['Contact', '#contact'], ['hello@nexgen.agency', 'mailto:hello@nexgen.agency'], ['+1 (234) 567-890', 'tel:+1234567890']] },
];

function Footer() {
  return (
    <footer className="bg-brand px-5 text-white">
      <div className="mx-auto grid max-w-[1100px] gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-extrabold">N</span>
            <span className="text-lg font-extrabold tracking-tight">NEX<span className="text-ink">GEN</span></span>
          </a>
          <p className="mt-4 max-w-xs text-xs leading-6 text-white/85">
            Independent thinking, thoughtful design and digital experiences
            made to move your business forward.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-ink">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map(([label, href]) => (
                <li key={label}><a className="text-xs text-white/85 transition hover:text-ink" href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-ink">Follow along</h2>
          <p className="mt-4 text-xs leading-6 text-white/85">Ideas, inspiration and the occasional look behind the scenes.</p>
          <a href="#contact" className="mt-3 inline-block text-xs font-bold text-white underline decoration-accent underline-offset-4">Find us on social media</a>
        </div>
      </div>
      <div className="border-t border-white/25">
        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-2 py-4 text-[10px] text-white/80 sm:flex-row">
          <p>© Nexgen Creative Agency. All rights reserved.</p>
          <a href="#home" className="transition hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
