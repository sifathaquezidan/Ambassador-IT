import SectionHeading from "@/components/SectionHeading";

const posts = [
  { title: "How to build a scalable SaaS architecture", date: "Dec 2025" },
  { title: "UI/UX checklist for conversion-focused landing pages", date: "Dec 2025" },
  { title: "DevOps essentials: CI/CD and monitoring basics", date: "Dec 2025" },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        title="Blog"
        subtitle="Insights, engineering notes, and product thinking (placeholder)."
      />
      <div className="mt-10 grid gap-4">
        {posts.map((p) => (
          <div key={p.title} className="rounded-2xl border border-slate-200 p-6">
            <div className="font-semibold">{p.title}</div>
            <div className="mt-2 text-xs text-slate-500">{p.date}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
