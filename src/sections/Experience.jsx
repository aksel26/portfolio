import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Experience 섹션 컴포넌트
 * 타임라인 형식의 경력 리스트
 */
export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 타이틀 opacity: 섹션이 화면에 들어올 때 fade-in, 나갈 때 fade-out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const experiences = [
    {
      period: "2023.03 - 현재",
      title: "시니어 프론트엔드 개발자",
      company: "테크 스타트업",
      description:
        "React 기반 SaaS 플랫폼 개발 및 리드를 담당하고 있습니다. 팀 내 코드 리뷰와 아키텍처 설계를 주도하며, 신입 개발자 멘토링을 진행하고 있습니다.",
      achievements: ["웹 성능 개선으로 로딩 시간 40% 단축", "TypeScript 마이그레이션 프로젝트 리드", "컴포넌트 라이브러리 구축 및 문서화"],
    },
    {
      period: "2021.06 - 2023.02",
      title: "프론트엔드 개발자",
      company: "디지털 에이전시",
      description:
        "다양한 클라이언트 프로젝트에서 웹 애플리케이션 개발을 담당했습니다. React, Vue.js 등 다양한 프레임워크를 활용하여 프로젝트를 성공적으로 완수했습니다.",
      achievements: ["10개 이상의 클라이언트 프로젝트 성공적 완수", "반응형 디자인 시스템 구축", "웹 접근성 개선 (WCAG 2.1 AA 준수)"],
    },
    {
      period: "2020.01 - 2021.05",
      title: "주니어 웹 개발자",
      company: "스타트업",
      description: "HTML, CSS, JavaScript를 활용한 웹 페이지 개발 및 유지보수를 담당했습니다. React를 학습하며 모던 프론트엔드 개발 경험을 쌓았습니다.",
      achievements: ["React로 레거시 jQuery 코드 마이그레이션", "UI/UX 개선으로 사용자 만족도 25% 향상", "Git 워크플로우 및 코드 리뷰 프로세스 도입"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} id="experience" className="py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* 왼쪽: 타이틀 (Sticky) */}
          <div className="lg:col-span-4">
            <motion.div style={{ opacity: titleOpacity }} className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
              <div className="w-20 h-1.5 bg-indigo-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">다양한 환경에서 쌓아온 실무 경험과 성장 과정입니다.</p>
            </motion.div>
          </div>

          {/* 오른쪽: 타임라인 콘텐츠 */}
          <div className="lg:col-span-8">
            <motion.div className="relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
              {/* 타임라인 세로선 */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-600 via-indigo-400 to-indigo-200 dark:from-indigo-500 dark:via-indigo-700 dark:to-indigo-900"></div>

              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-12 md:pl-20 pb-16 last:pb-0">
                  {/* 타임라인 점 */}
                  <motion.div
                    className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-indigo-600 rounded-full border-4 border-gray-50 dark:border-gray-950 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                  ></motion.div>

                  {/* 연결선 애니메이션 */}
                  <motion.div
                    className="absolute left-4 md:left-8 top-0 w-0.5 bg-indigo-600 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    style={{ height: "100%" }}
                  ></motion.div>

                  {/* 카드 콘텐츠 */}
                  <motion.div
                    whileHover={{ x: 8, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      {/* 기간 배지 */}
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{exp.period}</span>
                      </div>

                      {/* 직책 & 회사 */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>

                      {/* 설명 */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                      {/* 주요 성과 */}
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                        <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 왼쪽 강조선 */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
