type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionEyebrow({
  eyebrow,
  title,
  description,
  align = "center"
}: Props) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left mx-0";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div
        className={`flex items-center gap-3 text-gold-light ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold-light/70" aria-hidden />
        <span className="text-[11px] tracking-[0.4em] md:text-xs">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gold-light/70" aria-hidden />
      </div>
      <h2 className="mt-5 font-serif text-3xl leading-tight text-sand sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-sm leading-relaxed text-sand/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
