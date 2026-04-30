"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL, PHONE_NUMBER } from "@/lib/sections";

export default function FloatingCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={PHONE_TEL}
      aria-label={`전화 문의 ${PHONE_NUMBER}`}
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/40 transition-all md:bottom-6 md:right-6 md:px-6 md:py-4 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink/10">
        <span className="absolute inset-0 animate-ping rounded-full bg-ink/20" />
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="hidden sm:inline">분양 문의</span>
      <span>{PHONE_NUMBER}</span>
    </a>
  );
}
