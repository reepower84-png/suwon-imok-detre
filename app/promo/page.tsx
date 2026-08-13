import type { Metadata } from "next";
import PromoHeader from "@/components/promo/PromoHeader";
import PromoHero from "@/components/promo/PromoHero";
import PromoPoints from "@/components/promo/PromoPoints";
import PromoWhy from "@/components/promo/PromoWhy";
import PromoOverview from "@/components/promo/PromoOverview";
import PromoPrice from "@/components/promo/PromoPrice";
import PromoPlan from "@/components/promo/PromoPlan";
import PromoLocation from "@/components/promo/PromoLocation";
import PromoPremium from "@/components/promo/PromoPremium";
import PromoGallery from "@/components/promo/PromoGallery";
import PromoReserve from "@/components/promo/PromoReserve";
import PromoFooter from "@/components/promo/PromoFooter";
import PromoBottomBar from "@/components/promo/PromoBottomBar";
import { HEADLINE_TOP, HEADLINE_BOTTOM } from "@/lib/promo";

export const metadata: Metadata = {
  title: "수원이목지구 대방 디에트르 | 계약금 5% 분양 안내",
  description: `${HEADLINE_TOP} ${HEADLINE_BOTTOM} 계약금 5%·중도금 60%·입주 전 전매 가능·10·15 규제 미적용. 수원 이목지구 대방 디에트르 분양 정보.`,
  openGraph: {
    title: "수원이목지구 대방 디에트르",
    description: `${HEADLINE_TOP} ${HEADLINE_BOTTOM}`,
    type: "website",
    locale: "ko_KR"
  }
};

/* 기존 사이트(/) 와는 별개인 직관형 프로모션 랜딩.
   전역 body 가 다크 톤이라 밝은 배경은 이 래퍼에서 덮어쓴다. */
export default function PromoPage() {
  return (
    <div className="min-h-screen bg-white pb-[76px] text-promo-navy md:pb-[84px]">
      <PromoHeader />
      <main>
        <PromoHero />
        <PromoPoints />
        <PromoWhy />
        <PromoOverview />
        <PromoPrice />
        <PromoPlan />
        <PromoLocation />
        <PromoPremium />
        <PromoGallery />
        <PromoReserve />
      </main>
      <PromoFooter />
      <PromoBottomBar />
    </div>
  );
}
