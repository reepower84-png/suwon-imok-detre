import PromoSectionTitle from "./PromoSectionTitle";
import DocImage from "./DocImage";

const FEATURES = [
  {
    image: "/images/20260430_105021.jpg",
    title: "실내 수영장 & 사우나",
    desc: "사계절 즐기는 워터 라운지와 사우나."
  },
  {
    image: "/images/20260430_105041.jpg",
    title: "피트니스 & 골프연습장",
    desc: "단지 안에서 완성하는 컨디셔닝."
  },
  {
    image: "/images/20260430_105055.jpg",
    title: "키즈 & 패밀리 라운지",
    desc: "유아풀·키즈존·도서관까지 가족 중심 공간."
  }
];

const EDU = [
  "도보권 초·중·고 학군",
  "교육 의무용도 30% 이상 확보",
  "성균관대·경기과학고 인접",
  "공공도서관·문화시설 인접"
];

export default function PromoPremium() {
  return (
    <section id="promo-premium" className="bg-promo-gray py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="PREMIUM"
          title="프리미엄 커뮤니티"
          desc="현관문을 나서는 순간 시작되는 호텔급 커뮤니티. 운동·휴식·교육이 단지 안에서 완성됩니다."
        />

        {/* 명품 프리미엄 8 / 커뮤니티 시설 배치 */}
        <div className="mt-10 grid gap-3 md:mt-14 md:gap-4">
          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white">
            <DocImage
              src="/images/promo/premium8.jpg"
              alt="디에트르 더 리체 명품 프리미엄 8"
            />
          </figure>
          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white">
            <DocImage
              src="/images/promo/community.jpg"
              alt="입주민 전용 수영장·사우나·피트니스 등 커뮤니티 시설 배치"
            />
          </figure>
        </div>

        <ul className="mt-3 grid gap-3 md:grid-cols-3 md:gap-4">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
            >
              <img
                src={f.image}
                alt={f.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-[19px] font-black tracking-tight text-promo-navy md:text-[21px]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-promo-navy/60 md:text-[15px]">
                  {f.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* 교육환경 */}
        <div className="mt-4 grid overflow-hidden rounded-3xl border border-black/5 bg-white md:grid-cols-2">
          <img
            src="/images/20260430_105143.jpg"
            alt="교육환경"
            className="aspect-[16/10] w-full object-cover md:aspect-auto md:h-full"
            loading="lazy"
          />
          <div className="p-6 md:p-10">
            <div className="text-[11px] font-bold tracking-[0.3em] text-promo-red">
              EDUCATION
            </div>
            <h3 className="mt-2 text-[22px] font-black tracking-tight text-promo-navy md:text-[28px]">
              자녀의 미래를 위한 학세권
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-promo-navy/65">
              유치원·초·중·고가 도보권에 위치하고, 권역 연면적 30% 이상이 교육시설
              의무용도로 계획되어 대형 학원가 형성이 전망됩니다.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {EDU.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-2 rounded-xl bg-promo-gray px-3.5 py-3 text-[14px] font-bold text-promo-navy"
                >
                  <span
                    className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-promo-red"
                    aria-hidden
                  />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
