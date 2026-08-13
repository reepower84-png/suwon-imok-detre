/* 글씨가 촘촘한 홍보자료 이미지용 래퍼.
   모바일 폭(375px)에서는 본문이 읽히지 않으므로 탭하면 원본을 새 탭으로 연다. */
export default function DocImage({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
      aria-label={`${alt} 원본 크기로 보기`}
    >
      <img src={src} alt={alt} className={`w-full ${className}`} loading="lazy" />
      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-promo-navy/85 px-3 py-1.5 text-[11px] font-bold text-white lg:hidden">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
        </svg>
        탭하면 크게 보기
      </span>
    </a>
  );
}
