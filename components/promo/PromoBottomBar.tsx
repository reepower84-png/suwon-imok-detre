import { NAVER_FORM_URL } from "@/lib/promo";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/sections";

/* 화면 하단 고정 CTA — 어느 지점에서 스크롤을 멈춰도 바로 문의할 수 있게. */
export default function PromoBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-2 px-3 py-2.5 md:px-6 md:py-3">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 rounded-xl bg-promo-red py-3.5 text-[16px] font-black text-white md:text-[18px]"
        >
          <svg
            width="17"
            height="17"
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
          {PHONE_NUMBER}
        </a>
        <a
          href={NAVER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-promo-navy py-3.5 text-[16px] font-black text-white md:text-[18px]"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="4.5" width="18" height="17" rx="2" />
            <path d="M3 10h18M8 2.5v4M16 2.5v4" />
          </svg>
          방문예약
        </a>
      </div>
    </div>
  );
}
