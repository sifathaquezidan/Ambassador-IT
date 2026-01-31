export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
