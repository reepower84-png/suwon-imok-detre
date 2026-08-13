import PromoSectionTitle from "./PromoSectionTitle";
import { KEY_POINTS, POINT_CLOSING } from "@/lib/promo";

/* 특장점별 한 줄 부연 — 카드가 비어 보이지 않도록 최소한의 설명만 덧붙인다. */
const DETAIL: Record<string, string> = {
  "1": "계약 시 목돈 부담을 낮추고 입주 시점까지 자금 계획을 여유 있게 세울 수 있습니다.",
  "2": "중도금 60% 대출이 가능해 입주 전 실제 투입 자금을 최소화할 수 있습니다.",
  "3": "실거주 의무가 없어 직접 거주와 임대 운용을 자유롭게 선택할 수 있습니다.",
  "4": "10·15 부동산 대책 규제를 적용받지 않는 단지로 선택의 폭이 넓습니다."
};

export default function PromoPoints() {
  return (
    <section id="promo-point" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="KEY POINT"
          title="4가지 특장점"
          desc="복잡한 설명은 덜어냈습니다. 지금 이 단지를 선택해야 하는 이유 네 가지."
        />

        <ol className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2 md:gap-4">
          {KEY_POINTS.map((p) => (
            <li
              key={p.n}
              className="flex items-start gap-4 rounded-2xl border-2 border-promo-navy/10 bg-promo-gray p-6 transition-colors hover:border-promo-red/40 md:gap-6 md:p-8"
            >
              <span className="shrink-0 text-[26px] font-black leading-none text-promo-red md:text-[34px]">
                #{p.n}
              </span>
              <div className="min-w-0">
                <h3 className="text-[21px] font-black leading-tight tracking-tight text-promo-navy md:text-[27px]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[16px] font-bold text-promo-navy-soft md:text-[19px]">
                  {p.sub}
                </p>
                {p.note && (
                  <p className="mt-2 text-[12px] font-semibold text-promo-red md:text-[13px]">
                    {p.note}
                  </p>
                )}
                <p className="mt-3 text-[14px] leading-relaxed text-promo-navy/60 md:text-[15px]">
                  {DETAIL[p.n]}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* 마무리 카피 */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-promo-navy px-6 py-8 text-center md:mt-8 md:px-10 md:py-12">
          <p className="text-[19px] font-black leading-snug tracking-tight text-white md:text-[30px]">
            {POINT_CLOSING}
          </p>
          <p className="mt-3 text-[14px] font-medium text-white/60 md:text-[16px]">
            이미 갖춰진 도시 인프라 위에, 새로 계획된 택지의 쾌적함이 더해집니다.
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-promo-navy/45 md:text-[12px]">
          ※ 상기 분양 조건 및 금융 혜택은 타입·동호수에 따라 차이가 있으며, 관계
          법령 및 정부 정책에 따라 변경될 수 있습니다. 정확한 내용은 분양 상담을
          통해 확인해 주시기 바랍니다.
        </p>
      </div>
    </section>
  );
}
