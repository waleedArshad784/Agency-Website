const contactDetails = [
  { icon: '⌖', title: 'Visit us', lines: ['24 Market Street', 'New York, NY 10001'] },
  { icon: '☎', title: 'Call us', lines: ['+1 (234) 567-890', 'Mon–Fri, 9am–5pm'] },
  { icon: '✉', title: 'Email us', lines: ['hello@nexgen.agency', 'We usually reply in a day'] },
];

function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">LET&apos;S MAKE SOMETHING GREAT</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">Our contacts</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm leading-7 text-ink-muted">
              Have a project in mind or just want to say hello? We&apos;d love
              to hear from you.
            </p>
            <div className="mt-6 grid gap-4">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-base text-white">{detail.icon}</span>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-ink">{detail.title}</h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="mt-1 text-xs leading-5 text-ink-muted">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a href="mailto:hello@nexgen.agency" className="mt-5 inline-flex bg-accent px-5 py-2.5 text-[10px] font-extrabold text-ink transition hover:bg-[#ffd04f]">
              SEND US A MESSAGE <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>

          <div
            role="img"
            aria-label="Illustrated map showing Nexgen Creative Agency in New York"
            className="relative min-h-64 overflow-hidden border border-gray-200 bg-[#e8ece2] sm:min-h-72"
          >
            <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(35deg,transparent_44%,white_45%,white_48%,transparent_49%),linear-gradient(145deg,transparent_34%,white_35%,white_39%,transparent_40%),linear-gradient(90deg,transparent_48%,#cbd5bd_49%,#cbd5bd_51%,transparent_52%),linear-gradient(0deg,transparent_48%,#cbd5bd_49%,#cbd5bd_51%,transparent_52%)] [background-size:115px_90px,130px_120px,95px_75px,80px_110px]" />
            <span className="absolute left-[18%] top-[18%] h-12 w-24 rotate-12 bg-brand/25" />
            <span className="absolute bottom-[14%] right-[12%] h-16 w-28 -rotate-12 bg-brand/25" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full rounded-bl-none bg-brand text-xl text-white shadow-lg [transform:rotate(-45deg)]">
                <span className="[transform:rotate(45deg)]">⌖</span>
              </span>
              <span className="mt-2 bg-white px-3 py-2 text-center shadow">
                <span className="block text-[10px] font-extrabold uppercase text-ink">Nexgen Agency</span>
                <span className="mt-1 block text-[9px] text-ink-muted">New York, NY</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
