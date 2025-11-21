import { motion } from "framer-motion";
import { EXPERIENCES } from "./experience/data";
import { ExperienceItem } from "./experience/ExperienceItem";
import { useCountAnimation } from "../hooks/useCountAnimation";

/**
 * Experience 섹션 컴포넌트
 * 타임라인 형식의 경력 리스트
 */
const VIEWPORT_MARGIN = "-50px";
const ITEM_APPEAR_DURATION_SECONDS = 0.6;

export default function Experience() {

  // 총 경력 계산 (년 단위)
  const calculateTotalYears = (): number => {
    if (EXPERIENCES.length === 0) return 0;

    const parseDate = (dateStr: string): Date => {
      const [year, month] = dateStr.split(".").map((num) => parseInt(num));
      return new Date(year, month - 1);
    };

    const oldestExperience = EXPERIENCES[EXPERIENCES.length - 1];
    const startDate = parseDate(oldestExperience.period.split(" - ")[0]);

    const latestExperience = EXPERIENCES[0];
    const endPeriod = latestExperience.period.split(" - ")[1];
    const endDate = endPeriod === "현재" ? new Date() : parseDate(endPeriod);

    const years = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years);
  };

  const totalYears = calculateTotalYears();

  // 카운트 애니메이션
  const { rounded, ref: countRef } = useCountAnimation(totalYears, 2);

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.95,
      x: 0,
      transition: {
        duration: ITEM_APPEAR_DURATION_SECONDS,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="snap-section flex items-center bg-gray-50 dark:bg-gray-950 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* 타이틀 섹션 - 중앙 정렬 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 dark:text-white mb-8 tracking-tight">Experience</h2>
            <div ref={countRef} className="mb-6 flex items-baseline gap-2 justify-center">
              <motion.div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{rounded}</motion.div>
              <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">+</span>
              <span className="text-2xl text-gray-600 dark:text-gray-400 font-light">Years of Journey</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              끊임없는 도전과 성장을 통해 더 나은 가치를 만들어갑니다.
            </p>
          </motion.div>
        </div>

        {/* 타임라인 콘텐츠 */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={`${experience.title}-${index}`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: VIEWPORT_MARGIN }}
              >
                <ExperienceItem experience={experience} index={index} isLast={index === EXPERIENCES.length - 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
