import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const IMG = "/images/team/team1.jpg";

export default function TeamPage() {
  return (
    <main className={`${inter.className} relative overflow-x-hidden bg-white text-[#111]`}>
      {/* Keyframes (same as your HTML) */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes drift {
              0% { transform: translate(0,0); }
              50% { transform: translate(40px,-30px); }
              100% { transform: translate(0,0); }
            }
            @keyframes slide {
              from { transform: translateX(0); }
              to { transform: translateX(140vw); }
            }
            @keyframes float {
              0% { transform: rotate(45deg) translateY(0); }
              50% { transform: rotate(45deg) translateY(-20px); }
              100% { transform: rotate(45deg) translateY(0); }
            }
          `,
        }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <span className="absolute left-[-5%] top-[10%] h-[420px] w-[420px] rounded-full bg-[rgba(160,203,255,0.452)] animate-[drift_22s_ease-in-out_infinite]" />
        <span className="absolute left-[65%] top-[60%] h-[420px] w-[420px] rounded-full bg-[rgba(160,203,255,0.452)] animate-[drift_26s_ease-in-out_infinite]" />
        <span className="absolute left-[30%] top-[30%] h-[420px] w-[420px] rounded-full bg-[rgba(160,203,255,0.452)] animate-[drift_30s_ease-in-out_infinite]" />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-[100px]">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-[720px] text-center">
          <h1 className="text-[46px] font-semibold max-sm:text-[36px]">Meet Our Team</h1>
          <p className="mt-4 text-[18px] text-[#555]">
            We are a multidisciplinary team of designers, developers, and strategists
            dedicated to building scalable digital products.
          </p>
        </div>

        {/* Pill cards */}
        <div className="mb-[120px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          <PillCard name="Dyna" role="UI/UX Designer" img={IMG} bg="bg-[#fff1c9]" />
          <PillCard name="Sydney" role="Developer" img={IMG} bg="bg-[#f4f4f4]" />
          <PillCard name="Stephani" role="Project Manager" img={IMG} bg="bg-[#eaf2ff]" />
          <PillCard name="Rachel" role="Creative Designer" img={IMG} bg="bg-[#ffe6d6]" />
        </div>

        {/* Section title */}
        <div className="text-center">
          <h2 className="mb-3 text-[26px] font-semibold">Ambassador IT Team</h2>
          <p className="mx-auto mb-[60px] max-w-[640px] text-[14px] text-[#555]">
            A diverse group of passionate professionals, each contributing unique skills and experiences to drive
            innovation and excellence in every project we undertake.
          </p>
        </div>

        {/* Team cards */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10 pb-[120px]">
          <TeamCard name="Sabiha EItu" role="Designer" desc="Designing user-centric products with clarity and empathy." img={IMG} />
          <TeamCard name="Saira Akter" role="Project Manager" desc="Building brand narratives that resonate globally." img={IMG} />
          <TeamCard name="Sifat Zidan" role="Frontend Engineer" desc="Creating scalable, accessible web experiences." img={IMG} />
          <TeamCard name="Aurchi Deb" role="Backend Engineer" desc="Architecting robust systems for growth." img={IMG} />
        </div>

        {/* Bottom text */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[34px] font-semibold">People Behind the Innovation</h2>
          <p className="mt-5 text-[17px] leading-[1.8] text-[#555]">
            At our core, we believe great technology is built by people who care about quality, collaboration, and
            long-term impact.
          </p>
          <p className="mt-4 text-[17px] leading-[1.8] text-[#555]">
            Our team works closely with clients to design, build, and scale solutions that align with real business goals.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1b3965] px-6 py-[90px] text-white">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[-20%] top-[30%] h-[2px] w-[200px] bg-[rgba(255,255,255,0.15)] animate-[slide_18s_linear_infinite]" />
          <span className="absolute left-[-30%] top-[70%] h-[2px] w-[200px] bg-[rgba(255,255,255,0.15)] animate-[slide_22s_linear_infinite]" />
          <span className="absolute right-[20%] top-[20%] h-[80px] w-[80px] rotate-45 border-2 border-[rgba(255,255,255,0.12)] animate-[float_20s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-10 max-md:flex-col max-md:text-center">
          <div>
            <small className="text-[13px] tracking-[1px] opacity-85">DO YOU HAVE ANY PROJECT?</small>
            <h2 className="mt-[14px] text-[44px] font-semibold leading-[1.2] max-md:text-[36px]">
              Let’s Talk About Business<br />Solutions With Us
            </h2>
          </div>

          <div className="flex items-center gap-7 max-md:flex-col">
            <Link
              href="/company/contact"
              className="rounded-[10px] bg-white px-7 py-4 font-medium text-[#0d6efd] transition-transform duration-300 hover:-translate-y-1"
            >
              JOIN WITH US →
            </Link>
            <div className="text-[16px] font-medium opacity-95">☎ +880 (123) 456 78</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PillCard({
  name,
  role,
  img,
  bg,
}: {
  name: string;
  role: string;
  img: string;
  bg: string;
}) {
  return (
    <div className="group relative rounded-[180px] px-5 pb-10 pt-7 text-center transition-[transform,box-shadow] duration-500 hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
      <div className={`absolute inset-0 -z-10 rounded-[180px] ${bg}`} />
      <h3 className="text-[18px] font-semibold">{name}</h3>
      <span className="text-[14px] text-[#666]">{role}</span>

      <div className="mx-auto mt-6 h-[180px] w-[140px] overflow-hidden rounded-[100px]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>
    </div>
  );
}

function TeamCard({
  name,
  role,
  desc,
  img,
}: {
  name: string;
  role: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="rounded-[18px] px-6 py-8 text-center transition duration-300 hover:-translate-y-2 hover:bg-[#fafafa]">
      <img src={img} alt={name} className="mx-auto mb-4 h-[72px] w-[72px] rounded-full object-cover" />
      <h3 className="text-[16px] font-semibold">{name}</h3>
      <span className="mt-[6px] block text-[13px] text-[#555]">{role}</span>
      <p className="mt-3 text-[13px] leading-[1.6] text-[#555]">{desc}</p>

      <div className="mt-4 flex justify-center gap-3">
        <a className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ddd] text-[12px] text-[#555] transition hover:border-[#111] hover:bg-[#111] hover:text-white" href="#">
          in
        </a>
        <a className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ddd] text-[12px] text-[#555] transition hover:border-[#111] hover:bg-[#111] hover:text-white" href="#">
          X
        </a>
        <a className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ddd] text-[12px] text-[#555] transition hover:border-[#111] hover:bg-[#111] hover:text-white" href="#">
          ✉
        </a>
      </div>
    </div>
  );
}
