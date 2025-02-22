interface SubTitleProp {
  text: string;
  isLight?: boolean;
  isSmall?: boolean;
}

export function SubTitle({ text, isLight, isSmall }: SubTitleProp) {
  const isLightStyling = isLight ? "text-white/75" : "brand-text-color";
  const isSmallStyling = isSmall ? "lg:text-lg" : "text-lg lg:text-2xl";

  return (
    <span
      className={`${isLightStyling} ${isSmallStyling} font-light tracking-widest uppercase`}
    >
      {text}
    </span>
  );
}

interface TitleProp {
  text: string;
  isLight?: boolean;
  isSmall?: boolean;
}

export function Title({ text, isLight, isSmall }: TitleProp) {
  const isLightStyling = isLight ? "text-white" : "text-black";
  const isSmallStyling = isSmall
    ? "text-4xl lg:w-96 lg:text-4xl"
    : "text-5xl lg:w-[500px] lg:text-5xl";
  return (
    <h3
      className={`${isLightStyling} ${isSmallStyling} font-black tracking-tight capitalize`}
    >
      {text}
    </h3>
  );
}
