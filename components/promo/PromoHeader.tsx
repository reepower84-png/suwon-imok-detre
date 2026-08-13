"use client";

import { useEffect, useState } from "react";
import { PROMO_NAV } from "@/lib/promo";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/sections";

export default function PromoHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-6">
        {/* 로고 + 대표번호 */}
        <a href="#promo-top" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/20260430_104431-removebg-preview.png"
            alt="수원이목지구 대방 디에트르"
            className="h-7 w-auto md:h-9"
          />
          <span
            className="hidden h-6 w-px bg-black/15 sm:block"
            aria-hidden
          />
          <span className="hidden text-[19px] font-black tracking-tight text-promo-navy sm:block md:text-[24px]">
            {PHONE_NUMBER}
          </span>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center gap-1 lg:flex">
          {PROMO_NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-lg px-3.5 py-2 text-[15px] font-bold text-promo-navy/80 transition-colors hover:bg-promo-gray hover:text-promo-navy"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-1.5 rounded-full bg-promo-red px-4 py-2.5 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#cf3531] md:px-5 md:text-[15px]"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">전화상담</span>
            <span className="sm:hidden">{PHONE_NUMBER}</span>
          </a>

          {/* 모바일 메뉴 토글 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="메뉴 열기"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-promo-navy lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {open && (
        <nav className="border-t border-black/10 bg-white lg:hidden">
          <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-1 px-4 py-3">
            {PROMO_NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-promo-gray px-2 py-3 text-center text-[14px] font-bold text-promo-navy"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
