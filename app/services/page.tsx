import ServicesHero from "@/components/ServicesHero";
import ServiceGroupSection from "@/components/ServiceGroupSection";
import TechStackGrid from "@/components/TechStackGrid";
import CTA from "@/components/CTA";
import { serviceGroups } from "@/lib/services";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-16">
            {serviceGroups.map((group) => (
              <ServiceGroupSection key={group.id} group={group} />
            ))}
          </div>
        </div>
      </div>

      <TechStackGrid />
      <CTA />
    </main>
  );
}
