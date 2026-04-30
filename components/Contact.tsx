import SectionEyebrow from "./SectionEyebrow";
import {
  PHONE_NUMBER,
  PHONE_TEL,
  MODEL_HOUSE_ADDRESS
} from "@/lib/sections";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80')"
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container relative">
        <SectionEyebrow
          eyebrow="CONTACT"
          title={
            <>
              지금, 가장 빠르게
              <br />
              <span className="text-gold-light">분양 정보</span>를 확인하세요
            </>
          }
          description="견본주택 방문 예약 및 분양 상담은 전화 한 통으로 즉시 안내해 드립니다."
        />

        {/* Big call CTA */}
        <div className="mt-16 md:mt-20 mx-auto max-w-3xl">
          <a
            href={PHONE_TEL}
            className="group block overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/15 via-ink/40 to-ink/10 p-8 text-center transition-all hover:border-gold/70 hover:from-gold/25 md:p-12"
          >
            <div className="text-[10px] tracking-[0.5em] text-gold-light md:text-xs">
              CALL FOR INQUIRY
            </div>
            <div className="mt-5 font-serif text-5xl tracking-tight text-sand md:text-7xl">
              {PHONE_NUMBER}
            </div>
            <div className="mt-3 text-xs tracking-widest text-sand/55 md:text-sm">
              상담시간 · 매일 오전 10:00 ~ 오후 6:00
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform group-hover:translate-y-[-2px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              지금 바로 전화 연결
            </div>
          </a>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="text-[10px] tracking-[0.4em] text-gold-light">
                MODEL HOUSE
              </div>
              <div className="mt-2 text-sm text-sand md:text-base">
                견본주택 위치
              </div>
              <div className="mt-1 text-sm text-sand/70">
                {MODEL_HOUSE_ADDRESS}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <div className="text-[10px] tracking-[0.4em] text-gold-light">
                VISIT
              </div>
              <div className="mt-2 text-sm text-sand md:text-base">
                방문 예약 안내
              </div>
              <div className="mt-1 text-sm text-sand/70">
                사전 예약 시 대기 없이 전담 상담사 안내
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
