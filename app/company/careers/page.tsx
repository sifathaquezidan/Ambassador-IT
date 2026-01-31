import SectionHeading from "@/components/SectionHeading";

const roles = [
  { title: "Frontend Engineer", desc: "React / Next.js, UI systems, performance." },
  { title: "Backend Engineer", desc: "APIs, databases, security, scalability." },
  { title: "UI/UX Designer", desc: "Design systems, product thinking, prototypes." },
  { title: "DevOps Engineer", desc: "CI/CD, cloud infra, observability." },
];

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Careers"
        subtitle="Join a team that values learning, collaboration, and craftsmanship."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {roles.map((r) => (
          <div key={r.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="font-semibold">{r.title}</div>
            <p className="mt-3 text-sm text-slate-600">{r.desc}</p>
            <button className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              Apply (placeholder)
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
