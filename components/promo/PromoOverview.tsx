import PromoSectionTitle from "./PromoSectionTitle";
import DocImage from "./DocImage";

const SPECS: [string, string][] = [
  ["사업명", "수원이목지구 디에트르 더 리체 Ⅱ (A3BL)"],
  ["사업위치", "경기도 수원시 장안구 이목동 910번지 일원"],
  ["규모", "지하 3층 ~ 지상 최고 29층 / 17개동"],
  ["세대수", "총 1,744세대"],
  ["주차대수", "세대당 약 2.1대"],
  ["입주예정", "2028년 5월 (예정)"],
  ["시공사", "대방건설"]
];

const POINTS = [
  {
    title: "미니신도시급 단일 생활권",
    desc: "약 4,500세대 규모로 조성되는 이목지구의 중심 단지."
  },
  {
    title: "12%대 저밀도 건폐율",
    desc: "넓은 동간 거리로 채광·조망·프라이버시까지 여유롭게."
  },
  {
    title: "세대당 약 2.1대 주차",
    desc: "차량 2대 이상 가구도 부담 없는 넉넉한 주차 계획."
  },
  {
    title: "교육시설 의무용도 30%",
    desc: "권역 연면적의 30% 이상이 학원·서점 등 교육 인프라."
  }
];

export default function PromoOverview() {
  return (
    <section id="promo-overview" className="bg-promo-gray py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle eng="OVERVIEW" title="사업개요" />

        <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-12">
          {/* 단지 이미지 */}
          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white lg:col-span-7">
            <img
              src="/images/promo/aerial-2.jpg"
              alt="수원이목지구 대방 디에트르 단지 전경"
              className="aspect-[16/11] w-full object-cover"
              loading="lazy"
            />
          </figure>

          {/* 개요 표 */}
          <dl className="divide-y divide-black/5 rounded-3xl bg-white p-6 lg:col-span-5 md:p-8">
            {SPECS.map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 py-3.5 md:py-4">
                <dt className="w-[74px] shrink-0 text-[13px] font-bold text-promo-navy/50 md:w-[86px] md:text-[14px]">
                  {k}
                </dt>
                <dd className="min-w-0 text-[15px] font-bold leading-snug text-promo-navy md:text-[16px]">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 핵심 포인트 */}
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p, i) => (
            <li key={p.title} className="rounded-2xl bg-white p-6 md:p-7">
              <span className="text-[13px] font-black text-promo-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[17px] font-black leading-snug tracking-tight text-promo-navy md:text-[19px]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-promo-navy/60">
                {p.desc}
              </p>
            </li>
          ))}
        </ul>

        {/* 단지 상세 개요 (분양 홍보자료) */}
        <figure className="mt-3 overflow-hidden rounded-3xl border border-black/5 bg-white">
          <DocImage
            src="/images/promo/spec.jpg"
            alt="디에트르 더 리체 단지 상세 개요 및 타입별 세대수"
          />
        </figure>
      </div>
    </section>
  );
}
