import SectionHeading from "@/components/SectionHeading";

const solutions = [
  { title: "Startup MVP Development", desc: "Validate ideas quickly with a production-ready MVP." },
  { title: "Enterprise Software", desc: "Secure systems with integrations, roles, and scalability." },
  { title: "E-commerce & SaaS", desc: "Subscription platforms, dashboards, and automation." },
  { title: "FinTech Systems", desc: "Compliance-aware solutions with reliability and security." },
  { title: "EdTech Platforms", desc: "Learning systems built for growth and engagement." },
  { title: "Healthcare Systems", desc: "Privacy-first apps and workflows for modern care." },
];

export default function SolutionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Solutions"
        subtitle="Industry-focused solutions (placeholder) — replace with your real offerings."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="font-semibold">{s.title}</div>
            <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
