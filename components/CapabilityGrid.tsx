import SectionHeading from "./SectionHeading";
import { capabilities } from "@/lib/data";

export default function CapabilityGrid() {
  return (
    <div>
      <SectionHeading
        title="Our Capabilities"
        subtitle="Cross-functional teams built to execute quickly without sacrificing quality."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <div key={c} className="rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-medium text-slate-800">{c}</div>
            <p className="mt-2 text-sm text-slate-600">
              Planning, execution, and delivery with clear communication.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
