import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * 숫자 카운트 애니메이션 훅
 * @param {number} target - 목표 숫자
 * @param {number} duration - 애니메이션 지속 시간 (초)
 * @returns {Object} - { rounded: MotionValue, ref: React.Ref }
 */
export function useCountAnimation(target, duration = 2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, count, target, duration]);

  return { rounded, ref };
}
