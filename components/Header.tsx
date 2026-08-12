"use client";

import { useEffect, useState } from "react";
import { SECTIONS, PHONE_NUMBER, PHONE_TEL } from "@/lib/sections";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-white/5"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="container flex h-[60px] md:h-[72px] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sand"
          onClick={close}
        >
          <img
            src="/images/20260430_104431-removebg-preview.png"
            alt="대방 디에트르"
            className="h-10 w-auto max-w-[160px] object-contain md:h-12 md:max-w-[220px]"
          />
          <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" />
          <span className="hidden sm:inline-block text-[11px] md:text-xs tracking-widest text-sand/80">
            DETRE · 수원이목
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative whitespace-nowrap px-2.5 py-2 text-sm tracking-wider transition-colors xl:px-4 ${
                active === s.id
                  ? "text-gold-light"
                  : "text-sand/70 hover:text-sand"
              }`}
            >
              {s.label}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-px transition-all duration-300 ${
                  active === s.id ? "w-6 bg-gold-light" : "w-0 bg-transparent"
                }`}
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-light hover:bg-gold/20 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
            {PHONE_NUMBER}
          </a>

          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-sand"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">메뉴</span>
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-all ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container pb-6 pt-2 flex flex-col">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={close}
              className={`flex items-center justify-between border-b border-white/5 py-4 text-base tracking-wider ${
                active === s.id ? "text-gold-light" : "text-sand/85"
              }`}
            >
              <span>{s.label}</span>
              <span className="text-xs text-sand/40">→</span>
            </a>
          ))}
          <a
            href={PHONE_TEL}
            onClick={close}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
          >
            전화 문의 {PHONE_NUMBER}
          </a>
        </nav>
      </div>
    </header>
  );
}
