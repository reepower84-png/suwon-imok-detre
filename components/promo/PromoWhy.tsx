import PromoSectionTitle from "./PromoSectionTitle";
import DocImage from "./DocImage";

const CARDS = [
  {
    src: "/images/promo/why-cost.jpg",
    title: "기본형 건축비 21년 대비 27% 상승",
    desc: "건축비가 오를수록 신규 분양가는 계속 올라갑니다. 지금 분양가가 가장 저렴한 이유."
  },
  {
    src: "/images/promo/why-service.jpg",
    title: "공공택지지구라서 서비스면적이 다릅니다",
    desc: "재개발·재건축 단지 대비 실사용면적 약 5평 우위. 같은 84㎡라도 실제 쓰는 면적이 다릅니다."
  },
  {
    src: "/images/promo/why-dsr.jpg",
    title: "스트레스 DSR 3단계 미적용 단지",
    desc: "6월 30일까지 입주자모집공고가 시행된 단지로, 강화된 대출 규제에서 비껴갑니다."
  },
  {
    src: "/images/promo/why-parking.jpg",
    title: "총 주차대수 3,667대 · 세대당 약 2.1대",
    desc: "확장형 주차 1,289대(약 35%), 전기차 187대. 늦은 귀가에도 주차 걱정이 없습니다."
  },
  {
    src: "/images/promo/why-fee.jpg",
    title: "커뮤니티 관리비 부담을 줄였습니다",
    desc: "수영장 등 주요 커뮤니티 시설, 미사용 시 별도 이용료가 발생하지 않는 구조."
  },
  {
    src: "/images/promo/why-landscape.jpg",
    title: "고품격 조경 특화 적용",
    desc: "커뮤니티 포차라·어린이 물놀이터·조경특화 숲길공원까지, 단지 전체가 공원."
  }
];

export default function PromoWhy() {
  return (
    <section id="promo-why" className="bg-promo-gray py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="WHY NOW"
          title="왜 지금인가"
          desc="분양 상담에서 가장 많이 나오는 질문 여섯 가지를 자료 그대로 정리했습니다."
        />

        <ul className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2 md:gap-4">
          {CARDS.map((c, i) => (
            <li
              key={c.src}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
            >
              <div className="flex items-start gap-3 p-6 md:p-7">
                <span className="shrink-0 text-[20px] font-black leading-none text-promo-red md:text-[24px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[18px] font-black leading-snug tracking-tight text-promo-navy md:text-[21px]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-promo-navy/60 md:text-[15px]">
                    {c.desc}
                  </p>
                </div>
              </div>
              <DocImage
                src={c.src}
                alt={c.title}
                className="border-t border-black/5"
              />
            </li>
          ))}
        </ul>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-promo-navy/45 md:text-[12px]">
          ※ 상기 내용은 분양 홍보자료를 인용한 것으로, 정부 정책·금융기관 해석 및
          추가 안내(FAQ)에 따라 변동될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
