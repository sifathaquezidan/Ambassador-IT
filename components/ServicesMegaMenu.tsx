"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { serviceGroups } from "@/lib/services";

function chunkIntoColumns<T>(items: T[], cols: number) {
  const out: T[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => out[i % cols].push(item));
  return out;
}

export default function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [top, setTop] = useState(80);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const id = useId();

  // Ensure portal only renders on client
  useEffect(() => setMounted(true), []);

  // Lock panel position right under navbar row when opening
  useLayoutEffect(() => {
    if (!open) return;
    const rect = btnRef.current?.getBoundingClientRect();
    setTop((rect?.bottom ?? 64) + 16);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;

      if (btnRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;

      setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // 2 columns like your screenshot (change to 3 if you want)
  const cols = 2;
  const groupsInColumns = chunkIntoColumns(serviceGroups, cols);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        Services
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {mounted && open
        ? createPortal(
            <div className="fixed inset-0 z-[9999]">
              {/* Full page overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Centered panel */}
              <div
                ref={panelRef}
                id={id}
                role="dialog"
                aria-modal="true"
                className="absolute left-1/2 w-[min(980px,calc(100vw-48px))] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                style={{ top }}
              >
                {/* Scrollable content */}
                <div className="max-h-[calc(100vh-160px)] overflow-auto p-8">
                  <div className="grid gap-10 md:grid-cols-2">
                    {groupsInColumns.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-10">
                        {col.map((g) => (
                          <div key={g.id}>
                            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
                              <span className="h-2.5 w-2.5 rounded-sm bg-slate-400" />
                              {g.title}
                            </div>

                            <ul className="mt-5 space-y-3">
                              {g.items.map((it) => (
                                <li key={it.title}>
                                  <Link
                                    href={it.href ?? "/services"}
                                    className="block text-[15px] text-slate-700 hover:text-slate-900"
                                    onClick={() => setOpen(false)}
                                  >
                                    {it.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sticky footer */}
                <div className="border-t border-slate-200 bg-white px-8 py-5">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-base font-semibold text-slate-900 hover:text-slate-700"
                    onClick={() => setOpen(false)}
                  >
                    All Services <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
