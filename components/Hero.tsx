import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="border-b border-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium text-slate-600">{site.name}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Building Reliable Software for Modern Businesses
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We help startups and enterprises design, build, and scale web, mobile, and cloud products
            with speed, clarity, and quality.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/company/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources/case-studies"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium"
            >
              View Case Studies
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
            <span>• Product-minded delivery</span>
            <span>• Security-first engineering</span>
            <span>• Clean, scalable architecture</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="text-sm font-medium text-slate-700">What we deliver</div>
          <div className="mt-4 grid gap-3">
            {["MVP to enterprise platforms", "Modern UI/UX systems", "Cloud-ready deployments", "Support & scaling"].map(
              (x) => (
                <div key={x} className="rounded-xl border border-slate-200 p-4 text-sm text-slate-700">
                  {x}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
