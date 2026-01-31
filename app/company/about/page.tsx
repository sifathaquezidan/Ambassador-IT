import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title={`About ${site.name}`}
        subtitle="A modern technology partner focused on quality, clarity, and execution."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-8">
          <div className="font-semibold">Our Mission</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Help organizations grow through reliable software and thoughtful design.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-8">
          <div className="font-semibold">Our Vision</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Become a trusted global IT partner delivering products that people love to use.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-8">
        <div className="font-semibold">How we work</div>
        <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 space-y-2">
          <li>Discovery → scope, goals, timeline</li>
          <li>Design → UX, UI, prototyping</li>
          <li>Development → agile sprints, reviews</li>
          <li>Launch → QA, deployment, monitoring</li>
          <li>Support → improvements, scaling</li>
        </ul>
      </div>
    </main>
  );
}
