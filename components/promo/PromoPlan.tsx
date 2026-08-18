"use client";

import { useState } from "react";
import PromoSectionTitle from "./PromoSectionTitle";
import DocImage from "./DocImage";
import { UNITS, py } from "@/lib/promo-units";

export default function PromoPlan() {
  const [active, setActive] = useState(UNITS[0].id);
  const unit = UNITS.find((u) => u.id === active) ?? UNITS[0];

  return (
    <section id="promo-plan" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle
          eng="UNIT PLAN"
          title="평면안내"
          desc="타입을 눌러 평면과 면적, 무상 제공 옵션을 바로 확인하세요."
        />

        {/* 타입 탭 */}
        <div
          role="tablist"
          aria-label="평면 타입 선택"
          className="mt-10 grid grid-cols-4 gap-2 md:mt-14 md:grid-cols-7"
        >
          {UNITS.map((u) => {
            const on = u.id === active;
            return (
              <button
                key={u.id}
                role="tab"
                aria-selected={on}
                aria-controls="promo-plan-panel"
                onClick={() => setActive(u.id)}
                className={`rounded-xl px-2 py-3.5 text-center transition-colors md:py-4 ${
                  on
                    ? "bg-promo-navy text-white"
                    : "bg-promo-gray text-promo-navy hover:bg-promo-navy/10"
                }`}
              >
                <span className="block text-[17px] font-black tracking-tight md:text-[20px]">
                  {u.name}
                </span>
                <span
                  className={`mt-0.5 block text-[11px] font-bold md:text-[12px] ${
                    on ? "text-white/60" : "text-promo-navy/45"
                  }`}
                >
                  {u.households}세대
                </span>
              </button>
            );
          })}
        </div>

        <div id="promo-plan-panel" role="tabpanel" className="mt-4">
          {/* 면적 요약 */}
          <div className="grid gap-2.5 md:grid-cols-4">
            <div className="rounded-2xl bg-promo-navy px-5 py-5 md:px-6">
              <div className="text-[12px] font-bold text-white/55">
                전용면적 {unit.m2}㎡
              </div>
              <div className="mt-1 text-[24px] font-black tracking-tight text-white md:text-[28px]">
                {py(unit.exclusive)}평
              </div>
            </div>
            <div className="rounded-2xl bg-[#e5397f] px-5 py-5 md:px-6">
              <div className="text-[12px] font-bold text-white/70">
                서비스면적
              </div>
              <div className="mt-1 text-[24px] font-black tracking-tight text-white md:text-[28px]">
                + {py(unit.service)}평
              </div>
            </div>
            <div className="rounded-2xl bg-promo-red px-5 py-5 md:px-6">
              <div className="text-[12px] font-bold text-white/70">
                실사용면적
              </div>
              <div className="mt-1 text-[24px] font-black tracking-tight text-white md:text-[28px]">
                = {py(unit.usable)}평
              </div>
            </div>
            <div className="rounded-2xl bg-promo-gray px-5 py-5 md:px-6">
              <div className="text-[12px] font-bold text-promo-navy/50">
                한시적 무상 제공 옵션
              </div>
              <div className="mt-1 text-[24px] font-black tracking-tight text-promo-navy md:text-[28px]">
                {unit.freeOption}
              </div>
            </div>
          </div>

          {/* 특장점 */}
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {unit.features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-promo-navy/15 bg-white px-3.5 py-2 text-[13px] font-bold text-promo-navy"
              >
                {f}
              </li>
            ))}
            <li
              className={`rounded-full px-3.5 py-2 text-[13px] font-bold text-white ${
                unit.built ? "bg-[#1f7a3d]" : "bg-[#6b4a2a]"
              }`}
            >
              {unit.built ? "건립세대" : "미건립세대"}
            </li>
            {unit.soldOut && (
              <li className="rounded-full bg-promo-red px-3.5 py-2 text-[13px] font-bold text-white">
                분양마감
              </li>
            )}
          </ul>

          {/* 평면 이미지 */}
          <figure className="mt-2.5 overflow-hidden rounded-3xl border border-black/10 bg-white">
            <DocImage
              key={unit.id}
              src={unit.plan}
              alt={`${unit.name} 타입 평면도`}
            />
          </figure>
        </div>

        <p className="mt-5 text-center text-[11px] leading-relaxed text-promo-navy/45 md:text-[12px]">
          ※ 본 평면도는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있으며,
          옵션 품목·특화범위 및 위치는 실제 시공 및 계약 조건에 따라 차이가 있을
          수 있습니다. 무상 제공 옵션은 한시적 조건으로 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
}
