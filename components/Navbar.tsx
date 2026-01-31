"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">

      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ambassador IT
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-8">
          <Link href="/" className="nav-link">
            Home
          </Link>

          {/* Services */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Services <span className="text-xs">▾</span>
            </button>

            <div className="dropdown">
              <DropdownItem href="/services#software-development">
                Web Development
              </DropdownItem>

              <DropdownItem href="/services#app-development">
                App Development
              </DropdownItem>

              <DropdownItem href="/services#ui-ux-design">
                UI/UX Design
              </DropdownItem>

              <DropdownItem href="/services#cloud-devops">
                Cloud & DevOps
              </DropdownItem>

              <DropdownItem href="/services#ml-ai-development">
                ML & AI Development
              </DropdownItem>

              <DropdownItem href="/services#maintenance-support">
                Maintenance & Support
              </DropdownItem>

              {/* Divider */}
              <div className="my-2 border-t border-slate-200" />

              {/* Show All */}
              <DropdownItem href="/services">
                <span className="font-semibold text-blue-600">
                  Show All →
                </span>
              </DropdownItem>
            </div>
          </div>


          {/* Solutions */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Solutions <span className="text-xs">▾</span>
            </button>

            <div className="dropdown">
              <DropdownItem href="#">Startup Solutions</DropdownItem>
              <DropdownItem href="#">Enterprise Systems</DropdownItem>
              <DropdownItem href="#">Custom Software</DropdownItem>
              <DropdownItem href="#">Digital Transformation</DropdownItem>
            </div>
          </div>

          {/* Company */}
          <div className="relative group">
            <button className="nav-link flex items-center gap-1">
              Company <span className="text-xs">▾</span>
            </button>

            <div className="dropdown">
              <DropdownItem href="/company/about">About Us</DropdownItem>
              <DropdownItem href="/resources/case-studies">
                Case Studies
              </DropdownItem>
              <DropdownItem href="/company/careers">Careers</DropdownItem>
              <DropdownItem href="/company/team">Team</DropdownItem>

            </div>
          </div>

          <Link href="/company/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/company/contact"
          className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}

function DropdownItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-[13.5px] text-slate-800 hover:bg-slate-100 hover:text-blue-600"
    >
      {children}
    </Link>
  );
}
