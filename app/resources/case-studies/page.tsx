import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/lib/data";

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Case Studies"
        subtitle="Project stories (placeholder). Replace with real clients and measurable outcomes."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {caseStudies.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 p-8">
            <div className="text-lg font-semibold">{p.title}</div>
            <div className="mt-2 text-xs text-slate-500">{p.meta}</div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{p.desc}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-xl border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Stack</div>
                <div className="mt-1 font-medium">Next.js</div>
              </div>
              <div className="rounded-xl border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Timeline</div>
                <div className="mt-1 font-medium">8–12 wks</div>
              </div>
              <div className="rounded-xl border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Result</div>
                <div className="mt-1 font-medium">+X% KPI</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
