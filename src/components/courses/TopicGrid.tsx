type Topic = {
  icon: string;
  title: string;
  description?: string;
};

function rowsOf(items: Topic[]) {
  if (items.length === 4) {
    return [items.slice(0, 2), items.slice(2)];
  }

  const remainder = items.length % 3;
  if (remainder === 0) return [items];

  return [
    items.slice(0, items.length - remainder),
    items.slice(items.length - remainder),
  ];
}

function TopicItem({ item, index }: { item: Topic; index: number }) {
  return (
    <li className="flex items-center gap-5 rounded-xl border border-dark-theme/10 bg-white px-5 py-5 shadow-sm">
      <span className="shrink-0 text-3xl leading-none" aria-hidden>
        {item.icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-dark-theme/35">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-base leading-snug font-semibold text-dark-theme">
          {item.title}
        </h3>
        {item.description ? (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        ) : null}
      </div>
    </li>
  );
}

export function TopicGrid({ items }: { items: Topic[] }) {
  const rows = rowsOf(items);
  let index = 0;

  return (
    <div className="mx-4 max-w-[90rem] lg:mx-auto">
      {rows.map((row) => {
        const start = index;
        index += row.length;
        const columns =
          row.length === 3 ? "md:grid-cols-3" : row.length === 2 ? "md:grid-cols-2" : "";

        return (
          <ul
            key={row[0]?.title}
            className={`grid grid-cols-1 gap-3 ${columns} ${start > 0 ? "mt-3" : ""}`}
          >
            {row.map((item, offset) => (
              <TopicItem key={item.title} item={item} index={start + offset} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
