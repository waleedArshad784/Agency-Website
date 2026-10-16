const reviews = [
  { quote: 'They understood our vision straight away and made our brand feel like us.', name: 'Olivia Martin', role: 'Founder, Good Habit' },
  { quote: 'A thoughtful team and a smooth process. We love where our new website is taking us.', name: 'Daniel Brooks', role: 'Director, North Studio' },
  { quote: 'Creative, reliable and genuinely invested in getting the details right.', name: 'Amelia Chen', role: 'Owner, Urban Living' },
  { quote: 'They made a complex project feel easy and delivered work we are proud to share.', name: 'Marcus Reed', role: 'Founder, Forma Works' },
];

function Reviews() {
  return (
    <section className="bg-white px-5 py-14 sm:py-18">
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <p className="text-[11px] font-extrabold tracking-[0.22em] text-brand-dark">KIND WORDS FROM OUR CLIENTS</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">People about us</h2>
          <span className="mx-auto mt-4 block h-1 w-12 bg-accent" />
        </div>
        <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <figure key={review.name} className="flex gap-3 border-b border-gray-100 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2f2f0] text-lg text-brand-dark">
                {review.name.split(' ').map((part) => part[0]).join('')}
              </span>
              <div>
                <div className="text-[10px] tracking-widest text-accent" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-1 text-xs leading-5 text-ink-muted">“{review.quote}”</blockquote>
                <figcaption className="mt-2 text-[10px] font-extrabold text-ink">
                  {review.name} <span className="font-normal text-ink-muted">· {review.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
