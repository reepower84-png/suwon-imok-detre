import SectionEyebrow from "./SectionEyebrow";

const STEPS = [
  {
    n: "01",
    when: "계약 시",
    title: "1차 계약금 1,000만원",
    desc: "정액 계약금으로 시작하는 첫 관문. 초기 진입 부담을 확 낮췄습니다."
  },
  {
    n: "02",
    when: "입주 시까지",
    title: "계약금 5% 조건",
    desc: "계약금 5%로 입주 시점까지 여유 있게 자금 계획을 세울 수 있습니다."
  },
  {
    n: "03",
    when: "중도금",
    title: "다주택자도 60% 대출 가능",
    desc: "중도금 60% 대출이 가능해 입주 전 실제 투입 자금을 최소화합니다."
  }
];

const BENEFITS = [
  {
    title: "10·15 부동산 규제 미적용 단지",
    desc: "10·15 부동산 대책의 규제를 적용받지 않아 자금 계획과 선택의 폭이 한층 넓습니다.",
    icon: (
      <>
        <path d="M12 3 4 6.2v5.1c0 4.6 3.2 8.7 8 9.7 4.8-1 8-5.1 8-9.7V6.2L12 3z" />
        <path d="m9 12 2 2 4-4" />
      </>
    )
  },
  {
    title: "입주 전 분양권 전매 가능",
    desc: "입주 이전에도 분양권 전매가 가능해 자산 운용의 선택지를 열어 둡니다.",
    icon: (
      <>
        <path d="M4 8h13l-3-3" />
        <path d="M20 16H7l3 3" />
      </>
    )
  },
  {
    title: "실거주 의무 없음",
    desc: "실거주 의무가 없어 직접 거주와 임대 운용을 자유롭게 선택할 수 있습니다.",
    icon: (
      <>
        <circle cx="8.5" cy="12" r="3.5" />
        <path d="M12 12h9l-1.8 2.4" />
        <path d="M16.5 12v2.6" />
      </>
    )
  },
  {
    title: "약 2,000만원 상당 기본 옵션 제공",
    desc: "입주 후 추가로 들어갈 비용까지 미리 덜어 드리는 기본 옵션이 제공됩니다.",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M3 12h18" />
        <path d="M12 8v12" />
        <path d="M12 8c-1.8-3.2-6-3-6 0" />
        <path d="M12 8c1.8-3.2 6-3 6 0" />
      </>
    )
  }
];

export default function Benefit() {
  return (
    <section
      id="benefit"
      className="relative isolate overflow-hidden bg-ink py-24 md:py-32"
    >
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(168,133,74,0.16),transparent_70%)]"
        aria-hidden
      />

      <div className="container">
        <SectionEyebrow
          eyebrow="SPECIAL BENEFIT"
          title={
            <span className="nums-lining">
              13~15억원대 시대,
              <br />
              34평 입주 시까지{" "}
              <span className="whitespace-nowrap text-gold-light">
                약 5천만원대
              </span>
            </span>
          }
          description="수도권 신축 아파트가 13~15억원대를 형성한 지금, 대방 디에트르는 계약금 5%와 중도금 대출 조건으로 입주 시점까지의 자금 부담을 크게 덜어 드립니다."
        />

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-12">
          {/* Headline cost card */}
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-ink/40 to-ink/10 p-7 md:col-span-5 md:p-9">
            <div className="text-[10px] tracking-[0.4em] text-gold-light">
              INITIAL COST
            </div>
            <p className="mt-5 text-sm text-sand/70">
              수도권 13~15억원대 시대에
            </p>
            <div className="nums-lining mt-2 whitespace-nowrap font-serif text-[32px] leading-[1.15] text-sand sm:text-[40px] md:text-5xl">
              34평 입주 시까지
              <br />
              <span className="text-gold-light">약 5천만원대</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-sand/65">
              1차 계약금 1,000만원으로 시작해 계약금 5%, 중도금 60% 대출까지 —
              입주 전까지 실제로 준비할 자금을 최소화한 분양 조건입니다.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] tracking-wider text-gold-light md:text-xs">
              <span
                className="inline-block h-1 w-1 rounded-full bg-gold-light"
                aria-hidden
              />
              34평형 기준 · 타입 및 동호수별 상이
            </div>
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
              aria-hidden
            />
          </div>

          {/* Payment ladder */}
          <div className="grid gap-3 md:col-span-7">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/40 md:gap-6 md:p-7"
              >
                <div className="shrink-0">
                  <div className="font-serif text-xl text-gold-light/80 md:text-2xl">
                    {s.n}
                  </div>
                  <div className="mt-1 h-px w-6 bg-gold/40" aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] tracking-[0.3em] text-sand/45">
                    {s.when}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-sand md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand/65">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulation & option benefits */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/40 md:p-7"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold-light"
                aria-hidden
              >
                {b.icon}
              </svg>
              <h4 className="mt-5 text-base font-semibold leading-snug text-sand md:text-lg">
                {b.title}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-sand/65">
                {b.desc}
              </p>
              <div
                className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-[11px] leading-relaxed text-sand/40 md:text-xs">
          ※ 상기 분양 조건 및 금융 혜택은 타입·동호수에 따라 차이가 있으며,
          관계 법령 및 정부 정책에 따라 변경될 수 있습니다. 정확한 내용은 분양
          상담을 통해 확인해 주시기 바랍니다.
        </p>
      </div>
    </section>
  );
}
