import {
  HEADLINE_TOP,
  HEADLINE_BOTTOM,
  KEY_POINTS,
  NAVER_FORM_URL
} from "@/lib/promo";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/sections";

const FACTS = [
  { k: "총 세대수", v: "1,744세대" },
  { k: "규모", v: "지상 최고 29층 · 17개동" },
  { k: "주차", v: "세대당 약 2.1대" },
  { k: "입주 예정", v: "2028년 5월" }
];

export default function PromoHero() {
  return (
    <section id="promo-top" className="relative overflow-hidden bg-white">
      {/* 상단 은은한 배경 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[linear-gradient(180deg,#eaf0fa_0%,#f7f9fd_60%,#ffffff_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pb-14 pt-10 md:px-6 md:pb-20 md:pt-16">
        {/* 상단 뱃지 */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-promo-navy px-4 py-1.5 text-[12px] font-bold text-white md:text-[13px]">
            대방건설 · 디에트르
          </span>
          <span className="rounded-full border border-promo-red/30 bg-promo-red-soft px-4 py-1.5 text-[12px] font-bold text-promo-red md:text-[13px]">
            10·15 부동산 규제 전 모집공고 단지
          </span>
        </div>

        {/* 메인 카피 */}
        <h1 className="mt-6 text-center text-[30px] font-black leading-[1.18] tracking-[-0.03em] text-promo-navy sm:text-[44px] md:mt-8 md:text-[58px] lg:text-[70px]">
          <span className="block">{HEADLINE_TOP}</span>
          <span className="mt-1 block text-promo-red md:mt-3">
            {HEADLINE_BOTTOM}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] font-medium leading-relaxed text-promo-navy/70 md:mt-7 md:text-[19px]">
          수원이목지구 대방 디에트르 — 미니신도시급 약 4,500세대 생활권,
          <br className="hidden sm:block" /> 총 1,744세대 규모의 신축 아파트
        </p>

        {/* 4가지 특장점 요약 카드 */}
        <ul className="mt-9 grid grid-cols-2 gap-2.5 md:mt-12 md:gap-4 lg:grid-cols-4">
          {KEY_POINTS.map((p) => (
            <li
              key={p.n}
              className="relative overflow-hidden rounded-2xl bg-promo-navy px-4 py-6 text-center shadow-[0_10px_30px_-12px_rgba(21,42,99,0.6)] md:px-5 md:py-8"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/[0.06]"
                aria-hidden
              />
              <div className="relative">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[12px] font-black text-white md:h-7 md:w-7 md:text-[13px]">
                  {p.n}
                </span>
                <div className="mt-3 whitespace-nowrap text-[19px] font-black leading-tight tracking-tight text-white md:text-[26px]">
                  {p.title}
                </div>
                <div className="mt-1.5 text-[13px] font-bold text-[#ffd9a0] md:text-[16px]">
                  {p.sub}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-[11px] font-medium text-promo-navy/45 md:text-[12px]">
          ※ 개인별 대출심사 등 조건 확인 필요
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row md:mt-10">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-promo-red px-8 py-4 text-[17px] font-black text-white shadow-lg shadow-promo-red/25 transition-colors hover:bg-[#cf3531] md:px-10 md:py-5 md:text-[20px]"
          >
            전화상담 {PHONE_NUMBER}
          </a>
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-promo-navy px-8 py-4 text-[17px] font-black text-white shadow-lg shadow-promo-navy/25 transition-colors hover:bg-promo-navy-deep md:px-10 md:py-5 md:text-[20px]"
          >
            방문예약 신청
          </a>
        </div>

        {/* 조감도 */}
        <figure className="mt-10 overflow-hidden rounded-3xl border border-black/5 shadow-[0_24px_60px_-30px_rgba(11,26,68,0.55)] md:mt-14">
          <img
            src="/images/promo/aerial-1.jpg"
            alt="수원이목지구 대방 디에트르 조감도"
            className="aspect-[16/10] w-full object-cover md:aspect-[16/9]"
            fetchPriority="high"
          />
        </figure>

        {/* 핵심 수치 */}
        <dl className="mt-3 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {FACTS.map((f) => (
            <div
              key={f.k}
              className="rounded-2xl bg-promo-gray px-4 py-5 text-center md:py-6"
            >
              <dt className="text-[12px] font-bold text-promo-navy/50 md:text-[13px]">
                {f.k}
              </dt>
              <dd className="mt-1.5 text-[17px] font-black tracking-tight text-promo-navy md:text-[21px]">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
