import PromoSectionTitle from "./PromoSectionTitle";

const IMAGES = [
  { src: "/images/promo/aerial-3.jpg", title: "단지 조감도" },
  { src: "/images/promo/aerial-2.jpg", title: "단지 야경" },
  { src: "/images/20260430_133135.jpg", title: "단지 외관" },
  { src: "/images/20260430_132746.jpg", title: "거실" },
  { src: "/images/20260430_133401.jpg", title: "주방" },
  { src: "/images/20260430_133433.jpg", title: "침실" },
  { src: "/images/20260430_133657.jpg", title: "커뮤니티 라운지" },
  { src: "/images/20260430_133559.jpg", title: "단지 조경" }
];

export default function PromoGallery() {
  return (
    <section id="promo-gallery" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <PromoSectionTitle eng="GALLERY" title="갤러리" />

        <ul className="mt-10 grid grid-cols-2 gap-2.5 md:mt-14 md:grid-cols-3 md:gap-4">
          {IMAGES.map((img) => (
            <li
              key={img.src}
              className="relative overflow-hidden rounded-2xl border border-black/5"
            >
              <img
                src={img.src}
                alt={img.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2.5 left-2.5 rounded-full bg-promo-navy/85 px-3 py-1.5 text-[12px] font-bold text-white md:text-[13px]">
                {img.title}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-[11px] text-promo-navy/45 md:text-[12px]">
          ※ 본 페이지의 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수
          있습니다.
        </p>
      </div>
    </section>
  );
}
