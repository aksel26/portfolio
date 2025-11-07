import LogoLoop from "@/components/LogoLoop";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: string;
}

const techLogos = [
  { node: <p>adsf</p>, title: "React", href: "https://react.dev" },
  { node: <p>adsf</p>, title: "Next.js", href: "https://nextjs.org" },
  { node: <p>adsf</p>, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <p>adsf</p>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

/**
 * About 섹션 컴포넌트
 * 자기소개 및 기술 스택
 */
export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // 타이틀 opacity: 섹션이 화면에 들어올 때 fade-in, 나갈 때 fade-out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 0.5, 0]);

  const technicalSkills: Skill[] = [
    { name: "React", level: "상" },
    { name: "TypeScript", level: "상" },
    { name: "JavaScript", level: "상" },
    { name: "Tailwind CSS", level: "상" },
    { name: "Next.js", level: "중" },
    { name: "Framer Motion", level: "중" },
    { name: "Vite", level: "중" },
    { name: "Node.js", level: "중" },
  ];

  const collaborationTools: Skill[] = [
    { name: "Git", level: "상" },
    { name: "GitHub", level: "상" },
    { name: "Figma", level: "중" },
    { name: "Jira", level: "중" },
    { name: "Slack", level: "상" },
    { name: "Notion", level: "중" },
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
    <section ref={ref} id="about" className="snap-section relative flex items-center bg-gray-50 dark:bg-gray-950">
      {/* 배경 장식 */}
      <motion.div style={{ y }} className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 왼쪽: 타이틀 (Sticky) */}
          <div className="lg:col-span-4">
            <motion.div style={{ opacity: titleOpacity }} className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <div className="w-20 h-1.5 bg-indigo-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.</p>
            </motion.div>
          </div>

          {/* 오른쪽: 콘텐츠 */}
          <div className="lg:col-span-8 space-y-8">
            {/* 소개 텍스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                  안녕하세요
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  <p>
                    저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 깔끔하고 직관적인 인터페이스를 만드는 것을 좋아하며, 최신 웹 기술을 활용하여
                    성능이 뛰어난 웹 애플리케이션을 개발합니다.
                  </p>
                  <p>끊임없이 배우고 성장하는 것을 목표로 하며, 팀과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.</p>
                </div>
              </div>
            </motion.div>

            {/* 기술 스택 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>

              <div className="space-y-10">
                {/* Development 로고 루프 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Collaboration</h4>
                  <div style={{ position: "relative", overflow: "hidden" }} className="w-full">
                    <LogoLoop
                      logos={techLogos}
                      speed={80}
                      direction="left"
                      logoHeight={20}
                      gap={40}
                      pauseOnHover
                      scaleOnHover
                      fadeOut
                      fadeOutColor="#f9fafb"
                      ariaLabel="Technology partners"
                    />
                  </div>
                </div>
                {/* Collaboration 로고 루프 */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Collaboration</h4>
                  <div style={{ position: "relative", overflow: "hidden" }} className="w-full">
                    <LogoLoop
                      logos={techLogos}
                      speed={80}
                      direction="left"
                      logoHeight={20}
                      gap={40}
                      pauseOnHover
                      scaleOnHover
                      fadeOut
                      fadeOutColor="#f9fafb"
                      ariaLabel="Technology partners"
                    />
                  </div>
                </div>
              </div>

              {/* 추가 정보 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-6 p-4 md:p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30"
              >
                <h4 className="font-bold text-indigo-900 dark:text-indigo-300 mb-3 text-base">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Performance", "Accessibility", "Responsive"].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 bg-white dark:bg-gray-900 text-xs font-medium text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-200 dark:border-indigo-800"
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
