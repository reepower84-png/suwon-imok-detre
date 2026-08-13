import PromoSectionTitle from "./PromoSectionTitle";
import DocImage from "./DocImage";

const TRANSPORT = [
  { label: "지하철 1호선 성균관대역", time: "도보 10분" },
  { label: "GTX-C 노선 (예정)", time: "수원 정차역 인접" },
  { label: "신분당선 연장 (호매실~광교)", time: "광역 환승" },
  { label: "인덕원~동탄 복선전철 106역", time: "이목지구 인근" }
];

/* 분양 홍보자료 기반 입지·시세 상세 이미지 */
const DOCS = [
  {
    src: "/images/promo/traffic.jpg",
    title: "GTX-C · 인덕원~동탄 · 신분당선 연장",
    desc: "21대선 공약에 포함된 북수원 교통 호재와 개통 예정 시점을 한눈에."
  },
  {
    src: "/images/promo/develop.jpg",
    title: "첨단 미래산업 기업 북수원 유치 예정",
    desc: "북수원테크노밸리, 성균관대 R&D 사이언스파크, 탑동 이노베이션밸리."
  },
  {
    src: "/images/promo/jangan.jpg",
    title: "수원시 내 주거선호도 높은 상급지 “장안구”",
    desc: "성균관대역·북수원역(29년 예정)·화서역을 아우르는 트리플 역세권 생활권."
  },
  {
    src: "/images/promo/supply.jpg",
    title: "장안구 신축 매물 희소가치 상승",
    desc: "2020년 이후 금융 위기·구도심 재개발 불확실성으로 신규 공급이 크게 감소."
  },
  {
    src: "/images/promo/market.jpg",
    title: "권역별 34평 리딩단지 시세",
    desc: "입주연도·단지규모·생활인프라에 따른 최근 1년 실거래 기준 시세 형성."
  }
];

const NEARBY = [
  { icon: "🎓", label: "성균관대학교" },
  { icon: "🏫", label: "경기과학고등학교" },
  { icon: "🌆", label: "광교 신도시 생활권" },
  { icon: "🚆", label: "수원역 복합환승센터" },
  { icon: "🛣️", label: "북수원 IC · 영동고속도로" },
  { icon: "🛍️", label: "이목지구 중심상업지구" }
];

export default function PromoLocation() {
  return (
    <section id="promo-location" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="LOCATION"
          title="입지환경"
          desc="1호선 성균관대역 도보권에 GTX-C · 신분당선 연장 · 인덕원~동탄선까지. 광역 교통의 중심입니다."
        />

        <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-12">
          {/* 광역 교통도 */}
          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-promo-gray lg:col-span-7">
            <DocImage
              src="/images/20260504_165203.jpg"
              alt="수원이목지구 대방 디에트르 광역 교통망"
              className="object-contain"
            />
            <figcaption className="border-t border-black/5 bg-white px-5 py-3 text-[12px] font-semibold text-promo-navy/50">
              경기 수원시 장안구 이목동 일원 · 광역 교통망 계획도
            </figcaption>
          </figure>

          {/* 교통 리스트 */}
          <div className="rounded-3xl bg-promo-navy p-6 lg:col-span-5 md:p-8">
            <div className="text-[11px] font-bold tracking-[0.3em] text-white/50">
              TRANSPORT
            </div>
            <h3 className="mt-2 text-[22px] font-black tracking-tight text-white md:text-[26px]">
              사통팔달 광역 교통망
            </h3>
            <ul className="mt-6 space-y-3">
              {TRANSPORT.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-[15px] font-bold text-white md:text-[16px]">
                    {t.label}
                  </span>
                  <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold text-[#ffd9a0] md:text-[12px]">
                    {t.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 수원 개발 계획 */}
        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <div className="rounded-3xl bg-promo-gray p-6 lg:col-span-5 md:p-8">
            <div className="text-[11px] font-bold tracking-[0.3em] text-promo-navy/45">
              DEVELOPMENT
            </div>
            <h3 className="mt-2 text-[22px] font-black tracking-tight text-promo-navy md:text-[26px]">
              수원의 개발 축이 바뀝니다
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-promo-navy/65">
              북수원 테크노밸리, R&amp;D 사이언스파크, 수원 S-FEZ지구 등 수원시
              전역의 자족 기능 강화 계획이 진행 중입니다. 이목지구는 그 중심
              축에 자리합니다.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {NEARBY.map((n) => (
                <li
                  key={n.label}
                  className="flex items-center gap-2 rounded-xl bg-white px-3 py-3"
                >
                  <span className="text-[16px]" aria-hidden>
                    {n.icon}
                  </span>
                  <span className="text-[13px] font-bold leading-tight text-promo-navy">
                    {n.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="overflow-hidden rounded-3xl border border-black/5 bg-white lg:col-span-7">
            <DocImage
              src="/images/20260430_1048072.jpg"
              alt="수원시 개발 계획도"
              className="object-contain"
            />
          </figure>
        </div>

        {/* 입지 상세 자료 */}
        <ul className="mt-4 grid gap-3 md:grid-cols-2 md:gap-4">
          {DOCS.map((d) => (
            <li
              key={d.src}
              className="overflow-hidden rounded-3xl border border-black/5 bg-promo-gray"
            >
              <div className="px-6 pt-6 md:px-7 md:pt-7">
                <h3 className="text-[18px] font-black leading-snug tracking-tight text-promo-navy md:text-[20px]">
                  {d.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-promo-navy/60">
                  {d.desc}
                </p>
              </div>
              <DocImage src={d.src} alt={d.title} className="mt-5" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
