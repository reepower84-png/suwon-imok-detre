import { PHONE_NUMBER, PHONE_TEL, SITE_NAME } from "@/lib/sections";

export default function PromoFooter() {
  return (
    <footer className="bg-promo-navy-deep px-4 py-12 text-center md:px-6 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-[17px] font-black tracking-tight text-white md:text-[20px]">
          {SITE_NAME}
        </div>
        <a
          href={PHONE_TEL}
          className="mt-3 inline-flex min-h-[48px] items-center justify-center px-4 py-2 text-[28px] font-black tracking-tight text-white md:text-[36px]"
        >
          {PHONE_NUMBER}
        </a>
        <p className="mt-5 text-[12px] leading-relaxed text-white/50 md:text-[13px]">
          본 사이트에 사용된 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로
          실제와 다를 수 있습니다.
          <br />
          분양 조건 및 금융 혜택은 관계 법령·정부 정책에 따라 변경될 수 있습니다.
        </p>
        <p className="mt-4 text-[11px] text-white/35">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
