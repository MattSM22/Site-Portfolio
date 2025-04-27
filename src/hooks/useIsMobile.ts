import { useEffect, useState } from "react";

const breakpoints: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoint = keyof typeof breakpoints | number;

export function useIsMobile(breakpoint: Breakpoint = "md") {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = typeof breakpoint === "number" ? breakpoint : breakpoints[breakpoint];
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Checa já na montagem
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isMobile;
}