"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTeam = pathname === "/company/team";

  return (
    <>
      {!isTeam && <Navbar />}
      {children}
      {!isTeam && <Footer />}
    </>
  );
}
