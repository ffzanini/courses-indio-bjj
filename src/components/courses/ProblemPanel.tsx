function ProblemItem({ item }: { item: string }) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-dark-theme/10 bg-white px-5 py-5 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
        ✕
      </span>
      <p className="text-lg leading-snug font-semibold text-dark-theme">{item}</p>
    </li>
  );
}

export function ProblemPanel({
  title,
  items,
  punchline,
  description,
}: {
  title: string;
  items: string[];
  punchline: string;
  description: string;
}) {
  const remainder = items.length % 3;
  const head = remainder === 0 ? items : items.slice(0, items.length - remainder);
  const tail = remainder === 0 ? [] : items.slice(items.length - remainder);

  return (
    <section id="problemas" className="bg-background py-8 lg:py-16">
      <div className="mx-4 max-w-[90rem] lg:mx-auto">
        <h2 className="mb-6 text-center text-3xl font-semibold text-dark-theme md:text-4xl">
          {title}
        </h2>
        {head.length > 0 ? (
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {head.map((item) => (
              <ProblemItem key={item} item={item} />
            ))}
          </ul>
        ) : null}
        {tail.length > 0 ? (
          <ul
            className={`mt-3 grid grid-cols-1 gap-3 ${
              tail.length === 2 ? "md:grid-cols-2" : ""
            }`}
          >
            {tail.map((item) => (
              <ProblemItem key={item} item={item} />
            ))}
          </ul>
        ) : null}
        <div className="mt-3 rounded-2xl border border-secondary/25 bg-secondary/15 px-6 py-7 text-center shadow-sm md:px-12">
          <p className="text-2xl leading-snug font-bold text-secondary md:text-3xl">
            {punchline}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-dark-theme/80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
