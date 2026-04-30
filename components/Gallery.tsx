import SectionEyebrow from "./SectionEyebrow";

const IMAGES = [
  {
    src: "/images/20260430_133135.jpg",
    label: "EXTERIOR",
    title: "도시의 새로운 시그니처"
  },
  {
    src: "/images/20260430_132746.jpg",
    label: "LIVING",
    title: "여유로운 거실 공간"
  },
  {
    src: "/images/20260430_133401.jpg",
    label: "KITCHEN",
    title: "프리미엄 키친 패키지"
  },
  {
    src: "/images/20260430_133433.jpg",
    label: "BEDROOM",
    title: "조망과 채광의 침실"
  },
  {
    src: "/images/20260430_133657.jpg",
    label: "COMMUNITY",
    title: "라운지 & 컨시어지"
  },
  {
    src: "/images/20260430_133559.jpg",
    label: "LANDSCAPE",
    title: "단지 내 조경 산책로"
  }
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-[#0a0a0b] py-24 md:py-32"
    >
      <div className="container">
        <SectionEyebrow
          eyebrow="GALLERY"
          title={
            <>
              <span className="text-gold-light">디에트르</span>의 한 장면
            </>
          }
          description="단지 외관부터 세대 내부, 커뮤니티까지. 매일을 채울 공간을 미리 만나보세요."
        />

        <div className="mt-16 grid gap-3 md:mt-20 md:grid-cols-6 md:grid-rows-2">
          {IMAGES.map((img, i) => {
            const span =
              i === 0
                ? "md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto"
                : i === 1
                ? "md:col-span-3 aspect-[16/10]"
                : i === 2
                ? "md:col-span-2 aspect-square"
                : i === 3
                ? "md:col-span-2 aspect-square"
                : i === 4
                ? "md:col-span-2 aspect-square"
                : "md:col-span-3 aspect-[16/10]";
            return (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${span}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img.src}')` }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="text-[10px] tracking-[0.4em] text-gold-light">
                    {img.label}
                  </div>
                  <div className="mt-1 font-serif text-base text-sand md:text-lg">
                    {img.title}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-sand/40">
          * 본 페이지에 사용된 이미지는 이해를 돕기 위한 참고 이미지로, 실제와
          다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
