import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll with custom animation duration
    const scrollToTopSmoothly = () => {
      const startPosition = window.pageYOffset;
      const startTime = performance.now();
      const duration = 800; // Adjust this for faster/slower scroll (in milliseconds)

      const ease = (progress: number) => {
        // Ease-out cubic for smooth deceleration
        return 1 - Math.pow(1 - progress, 3);
      };

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = ease(progress);

        window.scrollTo(0, startPosition - startPosition * easeProgress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    };

    scrollToTopSmoothly();
  }, [pathname]);

  return null;
};
