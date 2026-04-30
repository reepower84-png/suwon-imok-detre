import {
  PHONE_NUMBER,
  PHONE_TEL,
  SITE_NAME,
  MODEL_HOUSE_ADDRESS
} from "@/lib/sections";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070708]">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-base tracking-[0.2em] text-gold-light">
              DAEBANG · DETRE
            </div>
            <div className="mt-3 font-serif text-2xl text-sand md:text-3xl">
              {SITE_NAME}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-sand/55">
              북수원의 새로운 기준이 될 미니신도시급 명품 단지. 광역 교통과
              명문 학군, 프리미엄 커뮤니티가 함께합니다.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.4em] text-gold-light">
              MODEL HOUSE
            </div>
            <div className="mt-3 text-sm text-sand">견본주택</div>
            <div className="mt-1 text-sm text-sand/65">
              {MODEL_HOUSE_ADDRESS}
            </div>
            <div className="mt-4 text-[10px] tracking-[0.4em] text-gold-light">
              HOURS
            </div>
            <div className="mt-2 text-sm text-sand/65">
              매일 10:00 ~ 18:00
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.4em] text-gold-light">
              CONTACT
            </div>
            <a
              href={PHONE_TEL}
              className="mt-3 block font-serif text-3xl text-sand hover:text-gold-light md:text-4xl"
            >
              {PHONE_NUMBER}
            </a>
            <div className="mt-2 text-xs text-sand/50">
              상담 문의 / 방문 예약
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.02] p-5 md:p-6">
          <p className="text-[11px] leading-relaxed text-sand/55 md:text-xs">
            ※ 본 홈페이지는 분양 홍보를 위해 제작되었으며, 제공되는 정보는
            편집과정에서 실제와 다소 차이가 있을 수 있습니다. 이에 따른 모든
            책임은 본사에 있지 않습니다. 세부 사항은 반드시 견본주택에서
            확인하시기 바랍니다.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] tracking-wider text-sand/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</div>
          <div>본 광고물은 사전 분양 홍보용으로 제작된 자료입니다.</div>
        </div>
      </div>
    </footer>
  );
}
