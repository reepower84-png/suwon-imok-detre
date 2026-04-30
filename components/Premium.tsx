import SectionEyebrow from "./SectionEyebrow";

const FEATURES = [
  {
    title: "실내 수영장 & 사우나",
    desc: "사계절 즐기는 프리미엄 워터 라운지와 사우나가 일상 속 휴식을 선사합니다.",
    image: "/images/20260430_105021.jpg"
  },
  {
    title: "피트니스 & 골프 연습장",
    desc: "최신 운동기구와 실내 골프 연습장으로 단지 안에서 완성하는 컨디셔닝.",
    image: "/images/20260430_105041.jpg"
  },
  {
    title: "키즈 & 패밀리 라운지",
    desc: "유아풀, 키즈존, 도서관까지 — 세대를 아우르는 가족 중심 커뮤니티.",
    image: "/images/20260430_105055.jpg"
  }
];

const SCHOOLS = [
  "도보권 초·중·고 학군",
  "공공도서관·문화시설 인접",
  "교육 의무용도 30% 이상 확보",
  "성균관대·경기과학고 인접 명문 학세권"
];

export default function Premium() {
  return (
    <section
      id="premium"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="container">
        <SectionEyebrow
          eyebrow="PREMIUM LIFESTYLE"
          title={
            <>
              일상이 곧 휴양지,
              <br />
              <span className="text-gold-light">고품격 커뮤니티</span>
            </>
          }
          description="현관문을 나서는 순간, 호텔급 컨시어지 라이프가 시작됩니다. 단지 안에서 완성되는 운동·휴식·교육의 모든 시간."
        />

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110"
                style={{ backgroundImage: `url('${f.image}')` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                <div className="h-px w-10 bg-gold-light/70" aria-hidden />
                <h3 className="mt-4 font-serif text-2xl text-sand md:text-[26px]">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/75">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Education band */}
        <div className="mt-16 grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:mt-20 md:grid-cols-2">
          <div className="relative min-h-[280px] md:min-h-[360px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/20260430_105143.jpg')"
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-ink/20" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-gold-light">
                  EDUCATION
                </div>
                <div className="mt-2 font-serif text-2xl text-sand md:text-3xl">
                  명문 학세권의 완성
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <h3 className="font-serif text-xl text-sand md:text-2xl">
              자녀의 미래를 위한 최적의 환경
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sand/70">
              유치원·초·중·고가 도보권에 위치하고, 권역 연면적 30% 이상이
              교육시설 의무용도로 계획되어 대형 학원가가 형성될 전망입니다.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SCHOOLS.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2.5 text-sm text-sand/85"
                >
                  <span
                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-gold-light"
                    aria-hidden
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
