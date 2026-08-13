import PromoSectionTitle from "./PromoSectionTitle";
import { NAVER_FORM_URL, KEY_POINTS } from "@/lib/promo";
import {
  PHONE_NUMBER,
  PHONE_TEL,
  MODEL_HOUSE_ADDRESS
} from "@/lib/sections";

export default function PromoReserve() {
  return (
    <section id="promo-reserve" className="bg-promo-gray py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="RESERVATION"
          title="방문예약"
          desc="사전 예약 시 대기 없이 전담 상담사가 안내해 드립니다."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 md:mt-14 md:grid-cols-2">
          {/* 전화 상담 */}
          <a
            href={PHONE_TEL}
            className="group flex flex-col items-center rounded-3xl bg-promo-red px-6 py-10 text-center shadow-lg shadow-promo-red/20 transition-transform hover:-translate-y-1 md:py-14"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] text-white/70">
              CALL
            </span>
            <span className="mt-3 text-[34px] font-black tracking-tight text-white md:text-[46px]">
              {PHONE_NUMBER}
            </span>
            <span className="mt-2 text-[14px] font-semibold text-white/80 md:text-[15px]">
              터치하면 바로 연결됩니다
            </span>
            <span className="mt-6 rounded-full bg-white px-6 py-3 text-[15px] font-black text-promo-red">
              지금 전화 상담
            </span>
          </a>

          {/* 방문예약 폼 */}
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-3xl bg-promo-navy px-6 py-10 text-center shadow-lg shadow-promo-navy/20 transition-transform hover:-translate-y-1 md:py-14"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] text-white/60">
              VISIT
            </span>
            <span className="mt-3 text-[26px] font-black leading-tight tracking-tight text-white md:text-[34px]">
              방문예약
              <br />
              신청하기
            </span>
            <span className="mt-2 text-[14px] font-semibold text-white/70 md:text-[15px]">
              이름·연락처만 남기면 상담사가 연락드립니다
            </span>
            <span className="mt-6 rounded-full bg-white px-6 py-3 text-[15px] font-black text-promo-navy">
              예약 폼 열기
            </span>
          </a>
        </div>

        {/* 조건 요약 + 안내 */}
        <div className="mx-auto mt-3 grid max-w-4xl gap-3 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 md:p-8">
            <div className="text-[11px] font-bold tracking-[0.3em] text-promo-red">
              SALES TERMS
            </div>
            <h3 className="mt-2 text-[19px] font-black tracking-tight text-promo-navy md:text-[22px]">
              분양 조건 한눈에
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {KEY_POINTS.map((p) => (
                <li
                  key={p.n}
                  className="rounded-full bg-promo-gray px-3.5 py-2 text-[13px] font-bold text-promo-navy"
                >
                  {p.title}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] leading-relaxed text-promo-navy/50">
              타입별 자금 계획과 잔여 세대 현황은 전화 상담으로 바로 안내해
              드립니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 md:p-8">
            <div className="text-[11px] font-bold tracking-[0.3em] text-promo-navy/45">
              MODEL HOUSE
            </div>
            <h3 className="mt-2 text-[19px] font-black tracking-tight text-promo-navy md:text-[22px]">
              견본주택 안내
            </h3>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-[12px] font-bold text-promo-navy/50">
                  위치
                </dt>
                <dd className="mt-0.5 text-[15px] font-bold text-promo-navy">
                  {MODEL_HOUSE_ADDRESS}
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold text-promo-navy/50">
                  상담시간
                </dt>
                <dd className="mt-0.5 text-[15px] font-bold text-promo-navy">
                  매일 오전 10:00 ~ 오후 6:00
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
