import SectionEyebrow from "./SectionEyebrow";

const HIGHLIGHTS = [
  {
    n: "01",
    title: "미니신도시급 단일 생활권",
    desc: "약 4,200세대 규모의 이목지구가 만드는 자족형 주거 인프라."
  },
  {
    n: "02",
    title: "12%대 저밀도 건폐율",
    desc: "동간 거리를 넓게 확보하여 채광·조망·프라이버시까지 한층 여유롭게."
  },
  {
    n: "03",
    title: "세대당 약 2.1대 주차",
    desc: "차량 두 대 이상의 가구도 부담 없는 넉넉한 주차 계획."
  },
  {
    n: "04",
    title: "교육시설 의무용도 30%",
    desc: "권역 연면적의 30% 이상이 학원·서점·독서실 등 교육 인프라로 조성."
  }
];

export default function Overview() {
  return (
    <section id="overview" className="relative bg-ink py-24 md:py-32">
      <div className="container">
        <SectionEyebrow
          eyebrow="OVERVIEW"
          title={
            <>
              북수원 핵심 입지에서 만나는
              <br />
              <span className="text-gold-light">대규모 명품 단지</span>
            </>
          }
          description="지하 3층 ~ 지상 최고 29층, 17개 동, 총 1,744세대 규모. 광교·동탄 생활권과 어깨를 나란히 하는 북수원의 새로운 랜드마크가 들어섭니다."
        />

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12">
          {/* Big visual */}
          <div className="relative md:col-span-7 aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: "url('/images/20260430_104807.jpg')"
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="text-[10px] tracking-[0.4em] text-gold-light">
                LANDMARK
              </div>
              <div className="mt-2 font-serif text-2xl text-sand md:text-3xl">
                도시의 스카이라인을 새로 그리다
              </div>
            </div>
          </div>

          {/* Spec table */}
          <div className="md:col-span-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="text-[10px] tracking-[0.4em] text-gold-light">
              PROJECT FACTS
            </div>
            <h3 className="mt-2 font-serif text-2xl text-sand md:text-3xl">
              단지 개요
            </h3>
            <dl className="mt-6 divide-y divide-white/5">
              {[
                ["사업명", "수원이목지구 디에트르 더 리체 Ⅱ (A3BL)"],
                ["사업위치", "경기도 수원시 장안구 이목동 910번지 일원"],
                ["규모", "지하 3층 ~ 지상 최고 29층 / 17개동"],
                ["세대수", "총 1,744세대"],
                ["주차", "세대당 약 2.1대"],
                ["입주 예정", "2028년 5월 (예정)"],
                ["시공", "대방건설"]
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 py-3.5 md:py-4"
                >
                  <dt className="shrink-0 text-xs tracking-wider text-sand/50 md:text-sm">
                    {k}
                  </dt>
                  <dd className="min-w-0 text-right text-sm leading-relaxed text-sand md:text-base">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.n}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/40 md:p-7"
            >
              <div className="font-serif text-xl text-gold-light/80">
                {h.n}
              </div>
              <h4 className="mt-3 text-base font-semibold text-sand md:text-lg">
                {h.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-sand/65">
                {h.desc}
              </p>
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
