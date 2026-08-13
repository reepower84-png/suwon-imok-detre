export default function PromoSectionTitle({
  title,
  eng,
  desc
}: {
  title: string;
  eng?: string;
  desc?: string;
}) {
  return (
    <div className="text-center">
      {/* 네이비 타이틀 바 — 스크롤 중에도 섹션 구분이 한눈에 잡히도록 */}
      <div className="rounded-2xl bg-promo-navy p-2.5 md:p-3">
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/30 px-4 py-6 md:py-9">
          {eng && (
            <span className="text-[10px] font-bold tracking-[0.35em] text-white/60 md:text-[11px]">
              {eng}
            </span>
          )}
          <h2 className="text-[26px] font-black tracking-tight text-white md:text-[40px]">
            {title}
          </h2>
        </div>
      </div>

      {desc && (
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] font-medium leading-relaxed text-promo-navy/70 md:mt-8 md:text-[18px]">
          {desc}
        </p>
      )}
    </div>
  );
}
