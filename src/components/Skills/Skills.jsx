const skills = [
  { name: 'Branding', value: 90, color: '#f4b528' },
  { name: 'Design', value: 85, color: '#ed6457' },
  { name: 'Development', value: 80, color: '#8ec63f' },
  { name: 'Marketing', value: 75, color: '#252525' },
];

function Skills() {
  return (
    <section className="bg-[#f6f6f4] px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">GOOD AT WHAT WE DO</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">Our skills</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center">
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full p-[7px] shadow-sm sm:h-32 sm:w-32"
                style={{ background: `conic-gradient(${skill.color} ${skill.value}%, #e5e7eb ${skill.value}% 100%)` }}
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-white text-2xl font-extrabold text-ink">
                  {skill.value}<span className="text-sm">%</span>
                </span>
              </div>
              <h3 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-ink">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
