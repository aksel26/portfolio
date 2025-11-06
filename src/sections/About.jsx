import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * About 섹션 컴포넌트
 * 자기소개 및 기술 스택
 */
export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // 타이틀 opacity: 섹션이 화면에 들어올 때 fade-in, 나갈 때 fade-out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 0.5, 0]);

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Git", level: 85 },
    { name: "Framer Motion", level: 75 },
    { name: "Vite", level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} id="about" className="relative py-32 bg-gray-50 dark:bg-gray-950">
      {/* 배경 장식 */}
      <motion.div style={{ y }} className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* 왼쪽: 타이틀 (Sticky) */}
          <div className="lg:col-span-4">
            <motion.div style={{ opacity: titleOpacity }} className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <div className="w-20 h-1.5 bg-indigo-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.</p>
            </motion.div>
          </div>

          {/* 오른쪽: 콘텐츠 */}
          <div className="lg:col-span-8 space-y-12">
            {/* 소개 텍스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                  안녕하세요
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                  <p>
                    저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 깔끔하고 직관적인 인터페이스를 만드는 것을 좋아하며, 최신 웹 기술을 활용하여
                    성능이 뛰어난 웹 애플리케이션을 개발합니다.
                  </p>
                  <p>
                    React를 중심으로 모던 JavaScript 생태계에서 활동하고 있으며, 타입 안정성을 위해 TypeScript를 선호합니다. 디자인과 개발의 경계에서 균형을
                    맞추는 것을 즐깁니다.
                  </p>
                  <p>끊임없이 배우고 성장하는 것을 목표로 하며, 팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.</p>
                </div>
              </div>
            </motion.div>

            {/* 기술 스택 */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white text-base md:text-lg">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-indigo-600 to-indigo-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 추가 정보 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 p-6 md:p-8 bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30"
              >
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-4 text-lg">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Performance", "Accessibility", "Responsive"].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-sm font-medium text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-200 dark:border-indigo-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
