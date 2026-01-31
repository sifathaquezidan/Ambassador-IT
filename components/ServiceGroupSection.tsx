import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "@/components/Reveal";
import type { ServiceGroup } from "@/lib/services";

function ServiceCard({
  title,
  desc,
  href = "/company/contact",
  tag,
}: {
  title: string;
  desc: string;
  href?: string;
  tag?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -top-20 right-[-60px] h-44 w-44 rounded-full bg-slate-100 blur-2xl" />
      </div>

      {tag ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
          {tag}
        </div>
      ) : null}

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </div>
        <span className="rounded-xl border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600">
          ↗
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>

      <div className="mt-6">
        <Link
          href={href}
          className="text-sm font-semibold text-slate-800 hover:text-slate-900"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

export default function ServiceGroupSection({ group }: { group: ServiceGroup }) {
  return (
    <section id={group.id} className="scroll-mt-28">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={group.title} subtitle={group.subtitle} />
          <Link
            href="/company/contact"
            className="inline-flex w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Talk to an expert
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item, idx) => (
          <Reveal key={item.title} delay={Math.min(0.08, idx * 0.02)}>
            <ServiceCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
