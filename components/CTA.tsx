import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 p-10 shadow-sm">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to build your next digital product?
          </h3>
          <p className="mt-3 max-w-2xl text-slate-600">
            Tell us what you’re building — we’ll respond with a plan, timeline, and estimate.
          </p>
          <div className="mt-7">
            <Link
              href="/company/contact"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Contact Ambassador IT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
