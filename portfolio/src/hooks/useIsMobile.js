import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 600;

/**
 * Hook que devuelve true si el viewport es menor a 600px.
 * Se actualiza al redimensionar la ventana (responsive real).
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}
