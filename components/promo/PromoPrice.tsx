import PromoSectionTitle from "./PromoSectionTitle";
import { UNITS, formatPyeongPrice, py } from "@/lib/promo-units";

export default function PromoPrice() {
  const cheapest = UNITS.reduce((a, b) =>
    a.pyeongPrice <= b.pyeongPrice ? a : b
  );

  return (
    <section id="promo-price" className="bg-promo-gray py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="PRICE"
          title="타입별 실사용 평당가"
          desc="전용면적이 아니라 실제로 쓰는 면적으로 나눈 평당가입니다. 서비스면적까지 더하면 체감 가격이 달라집니다."
        />

        {/* 요약 카드 */}
        <div className="mt-10 grid gap-2.5 md:mt-14 md:grid-cols-3">
          <div className="rounded-2xl bg-promo-navy px-6 py-7">
            <div className="text-[12px] font-bold text-white/55">
              최저 실사용 평당가
            </div>
            <div className="mt-1.5 text-[24px] font-black tracking-tight text-white md:text-[29px]">
              {formatPyeongPrice(cheapest.pyeongPrice)}
            </div>
            <div className="mt-1 text-[13px] font-bold text-[#ffd9a0]">
              {cheapest.name} 타입 기준
            </div>
          </div>
          <div className="rounded-2xl bg-white px-6 py-7">
            <div className="text-[12px] font-bold text-promo-navy/50">
              최대 서비스면적
            </div>
            <div className="mt-1.5 text-[26px] font-black tracking-tight text-promo-navy md:text-[32px]">
              + 17.30평
            </div>
            <div className="mt-1 text-[13px] font-bold text-promo-red">
              139A 타입 기준
            </div>
          </div>
          <div className="rounded-2xl bg-white px-6 py-7">
            <div className="text-[12px] font-bold text-promo-navy/50">
              공급 타입
            </div>
            <div className="mt-1.5 text-[26px] font-black tracking-tight text-promo-navy md:text-[32px]">
              {UNITS.length}개 타입
            </div>
            <div className="mt-1 text-[13px] font-bold text-promo-navy/50">
              84㎡ ~ 141㎡
            </div>
          </div>
        </div>

        {/* 모바일: 가로 스크롤 없이 타입별 카드로 */}
        <ul className="mt-3 grid gap-2.5 md:hidden">
          {UNITS.map((u) => (
            <li key={u.id} className="rounded-2xl bg-white p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[20px] font-black tracking-tight text-promo-navy">
                  {u.name}
                </span>
                <span className="text-[13px] font-semibold text-promo-navy/50">
                  {u.households}세대
                </span>
              </div>

              <div className="mt-3 flex items-baseline gap-1.5 text-[15px] font-bold">
                <span className="text-promo-navy">{py(u.exclusive)}평</span>
                <span className="text-[#e5397f]">+ {py(u.service)}평</span>
                <span className="text-promo-navy/40">=</span>
                <span className="text-[18px] font-black text-promo-navy">
                  {py(u.usable)}평
                </span>
              </div>

              <dl className="mt-3 space-y-1.5 border-t border-black/5 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[13px] font-bold text-promo-navy/50">
                    실사용 평당가
                  </dt>
                  <dd className="text-[16px] font-black text-promo-red">
                    {formatPyeongPrice(u.pyeongPrice)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[13px] font-bold text-promo-navy/50">
                    무상 옵션
                  </dt>
                  <dd className="text-[15px] font-bold text-promo-navy">
                    {u.freeOption}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        {/* 데스크톱: 표 */}
        <div className="mt-3 hidden overflow-x-auto rounded-3xl bg-white md:block">
          <table className="w-full min-w-[720px] border-collapse text-center">
            <thead>
              <tr className="bg-promo-navy text-white">
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  타입
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  세대수
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  전용면적
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  서비스면적
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  실사용면적
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  실사용 평당가
                </th>
                <th className="px-3 py-4 text-[13px] font-bold md:text-[14px]">
                  무상 옵션
                </th>
              </tr>
            </thead>
            <tbody>
              {UNITS.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-black/5 last:border-0"
                >
                  <td className="px-3 py-4 text-[16px] font-black text-promo-navy md:text-[18px]">
                    {u.name}
                  </td>
                  <td className="px-3 py-4 text-[14px] font-semibold text-promo-navy/70">
                    {u.households}세대
                  </td>
                  <td className="px-3 py-4 text-[14px] font-bold text-promo-navy md:text-[15px]">
                    {py(u.exclusive)}평
                  </td>
                  <td className="px-3 py-4 text-[14px] font-bold text-[#e5397f] md:text-[15px]">
                    + {py(u.service)}평
                  </td>
                  <td className="px-3 py-4 text-[15px] font-black text-promo-navy md:text-[17px]">
                    {py(u.usable)}평
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-[14px] font-black text-promo-red md:text-[16px]">
                    {formatPyeongPrice(u.pyeongPrice)}
                  </td>
                  <td className="px-3 py-4 text-[14px] font-bold text-promo-navy/70 md:text-[15px]">
                    {u.freeOption}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-promo-navy/45 md:text-[12px]">
          ※ 실사용 평당가는 발코니 확장비 포함 · 평균가 기준이며, 동·호수 및
          층별로 차이가 있습니다. 무상 제공 옵션은 한시적 조건으로 변경될 수
          있습니다. 정확한 금액은 분양 상담을 통해 확인해 주세요.
        </p>
      </div>
    </section>
  );
}
