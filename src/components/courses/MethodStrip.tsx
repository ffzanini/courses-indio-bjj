export function MethodStrip({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section id="metodo" className="bg-foreground/5 py-8 lg:py-16">
      <div className="mx-4 max-w-[90rem] overflow-hidden rounded-2xl border border-dark-theme/10 bg-dark-theme/10 shadow-sm lg:mx-auto">
        <p className="bg-white px-6 py-6 text-center text-xl leading-snug font-semibold text-dark-theme md:px-12 md:text-2xl">
          {title}
        </p>
        <ul className="mt-px grid gap-px md:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-3 bg-white px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-ja text-xs font-bold text-dark-theme">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-snug font-semibold text-dark-theme">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
