import { useMotionValue, useTransform, animate, useInView, MotionValue } from "framer-motion";
import { useEffect, useRef, RefObject } from "react";

interface UseCountAnimationReturn {
  rounded: MotionValue<number>;
  ref: RefObject<HTMLElement>;
}

/**
 * 숫자 카운트 애니메이션 훅
 * @param target - 목표 숫자
 * @param duration - 애니메이션 지속 시간 (초)
 * @returns { rounded: MotionValue, ref: React.Ref }
 */
export function useCountAnimation(target: number, duration: number = 2): UseCountAnimationReturn {
  const ref = useRef<HTMLElement>(null);
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
