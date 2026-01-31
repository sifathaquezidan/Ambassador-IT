import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

const chips = [
    "Fast delivery",
    "Clean architecture",
    "Conversion-first UI",
    "Security & performance",
];

export default function ServicesHero() {
    return (
        <section className="relative overflow-hidden border-b border-slate-200">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-[-80px] h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center">
                <div>
                    <Reveal>
                        <p className="text-sm font-medium text-slate-600">Our Services</p>
                    </Reveal>

                    <Reveal delay={0.05}>
                        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Build with {site.name}-
                             Modern engineering, real outcomes
                        </h1>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                            From websites and apps to AI and cloud, we deliver clean, scalable
                            solutions that look great and perform even better.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/company/contact"
                                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                Get a free consultation
                            </Link>
                            <Link
                                href="#software-development"
                                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                Explore services
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {chips.map((c) => (
                                <span
                                    key={c}
                                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.08}>
                    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        {/* soft decorative glows */}
                        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-slate-200/50 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-14 -right-14 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />

                        {/* Full-size image */}
                        <Image
                            src="/images/services-hero.png"
                            alt="Services illustration"
                            width={1200}
                            height={900}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>

                </Reveal>
            </div>
        </section>
    );
}
