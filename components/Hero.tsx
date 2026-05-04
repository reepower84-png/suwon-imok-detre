import { PHONE_TEL } from "@/lib/sections";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage: "url('/images/20260430_104729.jpg')"
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      </div>

      <div className="container flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:justify-center md:pt-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 text-gold-light">
            <span className="h-px w-10 bg-gold-light/70" aria-hidden />
            <span className="text-[11px] md:text-xs tracking-[0.4em]">
              SUWON · IMOK · PRESTIGE
            </span>
          </div>

          <h1 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-tight text-sand sm:text-[56px] md:text-[72px] lg:text-[84px]">
            북수원의 새로운 기준,
            <br />
            <span className="text-gold-light">대방 디에트르</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-sand/80 sm:text-base md:text-lg">
            미니신도시급 4,500세대 규모의 수원이목지구.
            <br className="hidden sm:block" />
            광역 교통망과 명문 학군, 프리미엄 커뮤니티가 완성하는
            <br className="hidden sm:block" />
            품격 있는 라이프스타일을 만나보세요.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 sm:px-8 sm:py-5 text-base md:text-lg font-semibold text-ink transition-all hover:bg-gold-light"
            >
              방문 예약 / 분양 문의
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-sand px-6 py-4 sm:px-8 sm:py-5 text-base md:text-lg font-semibold text-ink shadow-lg shadow-black/20 transition-colors hover:bg-white"
            >
              <svg
                width="18"
                height="18"
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
              1666 · 6365
            </a>
            <a
              href="https://form.naver.com/response/UuI_Z5VPT2BJ34F2xGWA8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-light px-6 py-4 sm:px-8 sm:py-5 text-base md:text-lg font-semibold text-ink shadow-lg shadow-black/20 transition-colors hover:bg-sand"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              방문상담예약
            </a>
          </div>
        </div>

        {/* Bottom badges */}
        <div className="mt-16 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-4">
          {[
            { k: "총 세대수", v: "1,744세대" },
            { k: "최고 층수", v: "지상 29층" },
            { k: "동 수", v: "17개동" },
            { k: "입주 예정", v: "2028년 5월" }
          ].map((b) => (
            <div key={b.k} className="bg-ink/50 px-4 py-5 text-center md:py-6">
              <div className="text-[11px] tracking-widest text-sand/55">
                {b.k}
              </div>
              <div className="mt-1.5 font-serif text-lg text-sand md:text-2xl">
                {b.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] text-sand/50">
          SCROLL
          <span className="h-8 w-px animate-pulse bg-sand/40" aria-hidden />
        </div>
      </div>
    </section>
  );
}
