import SectionHeading from "./SectionHeading";
import { techStack } from "@/lib/services";

export default function TechStackGrid() {
  return (
    <section className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          title="Yes. We cover your tech stack."
          subtitle="Our team works across modern frontend, backend, data, and cloud tooling."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-800"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
