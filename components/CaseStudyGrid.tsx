import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "@/lib/data";

export default function CaseStudyGrid() {
  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          title="Selected Work"
          subtitle="A few representative projects (placeholder) — replace with your real portfolio."
        />
        <Link
          href="/resources/case-studies"
          className="text-sm font-medium text-slate-700 hover:text-slate-900"
        >
          View all →
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {caseStudies.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="text-base font-semibold">{p.title}</div>
            <div className="mt-2 text-xs text-slate-500">{p.meta}</div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
