import SectionHeading from "./SectionHeading";
import { services } from "@/lib/data";

export default function ServiceCards() {
  return (
    <div>
      <SectionHeading
        title="Our Services"
        subtitle="End-to-end product engineering, from strategy and design to development and scale."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="text-base font-semibold">{s.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
