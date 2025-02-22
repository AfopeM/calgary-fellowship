import { useMedia } from "react-use";

export default function useResponsive() {
  const isSmScreen = useMedia("(max-width: 767px)", false); // Tailwind `sm` and below
  const isMdScreen = useMedia(
    "(min-width: 768px) and (max-width: 1023px)",
    false,
  ); // Tailwind `md`
  const isLgScreen = useMedia("(min-width: 1024px)", false); // Tailwind `lg` and above

  return {
    isSmScreen,
    isMdScreen,
    isLgScreen,
  };
}
