import SectionEyebrow from "./SectionEyebrow";
import { PHONE_TEL } from "@/lib/sections";

const TRANSPORT = [
  { label: "지하철 1호선 성균관대역", time: "차량 약 5분" },
  { label: "GTX-C 노선 (예정)", time: "수원 정차역 인접" },
  { label: "신분당선 연장 (호매실~광교)", time: "광역 환승 가능" },
  { label: "인덕원~동탄 복선전철 106역", time: "이목지구 인근" }
];

const NEIGHBOR = [
  { label: "성균관대학교", icon: "🎓" },
  { label: "경기과학고등학교", icon: "🏫" },
  { label: "광교 신도시 생활권", icon: "🌆" },
  { label: "수원역 복합환승센터", icon: "🚆" },
  { label: "북수원 IC / 영동고속도로", icon: "🛣️" },
  { label: "이목지구 중심상업지구", icon: "🛍️" }
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#0a0a0b] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="container relative">
        <SectionEyebrow
          eyebrow="LOCATION"
          title={
            <>
              모든 길이 <span className="text-gold-light">집</span>으로
              이어지다
            </>
          }
          description="GTX-C, 신분당선 연장, 인덕원~동탄 복선전철까지. 광역 교통의 중심에서 서울·강남까지 시간이 더 가까워집니다."
        />

        <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-12">
          {/* Map visual */}
          <div className="relative lg:col-span-7 aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/20260430_1048072.jpg')"
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-ink/50" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            {/* Pin */}
            <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+82px)] -translate-y-[calc(50%+47px)]">
              <div className="relative">
                <span className="absolute -inset-6 animate-ping rounded-full bg-gold/30" />
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-gold/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
              </div>
              <div className="mt-3 -translate-x-1/2 rounded-full bg-ink/85 px-3 py-1 text-[11px] tracking-widest text-gold-light backdrop-blur">
                대방 디에트르
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/95 to-transparent p-5 md:p-7">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-gold-light">
                  ADDRESS
                </div>
                <div className="mt-1 text-sm text-sand md:text-base">
                  경기 수원시 장안구 이목동 일원
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-sand/30 bg-ink/60 px-4 py-2 text-xs text-sand hover:bg-sand/10"
              >
                견본주택 보기 →
              </a>
            </div>
          </div>

          {/* Transport */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
              <div className="text-[10px] tracking-[0.4em] text-gold-light">
                TRANSPORT
              </div>
              <h3 className="mt-2 font-serif text-2xl text-sand">
                광역 교통 네트워크
              </h3>
              <ul className="mt-5 space-y-3.5">
                {TRANSPORT.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-sand/85 md:text-base">
                      {t.label}
                    </span>
                    <span className="shrink-0 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] text-gold-light">
                      {t.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-6 transition-colors hover:bg-gold/20"
            >
              <div className="text-left">
                <div className="text-[10px] tracking-[0.4em] text-gold-light">
                  CALL US
                </div>
                <div className="mt-1 font-serif text-2xl text-sand md:text-3xl">
                  1666 · 6365
                </div>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink transition-transform group-hover:scale-105">
                <svg
                  width="20"
                  height="20"
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
              </span>
            </a>
          </div>
        </div>

        {/* Neighbor amenities */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {NEIGHBOR.map((n) => (
            <div
              key={n.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5"
            >
              <span className="text-xl" aria-hidden>
                {n.icon}
              </span>
              <span className="text-xs text-sand/85 md:text-sm">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
