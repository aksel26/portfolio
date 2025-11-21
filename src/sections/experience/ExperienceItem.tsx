import { motion } from "framer-motion";
import { Experience } from "./data";
import { useState } from "react";



const COMMON_KEYWORDS = [
  "AWS", "Firebase", "Google Sheets API", "Vercel", "PWA", "Monorepo", 
  "Claude AI", "Google AI", "UI/UX", "Supabase", "SEO", "SSR", "React", 
  "Vite", "Kakao API", "i18n", "Excel", "SheetJS", "Handlebars", "Chart.js", 
  "JSZip", "Node.js", "Next.js", "Sharp", "Swiper.js", "Winston", 
  "Framer Motion", "Recoil", "Web Worker", "Intersection Observer", 
  "GraphQL", "Apollo Client", "Ant Design", "Redux", "CI/CD", "API",
  "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind", "Sass", "Styled Components"
];

const highlightText = (text: string, keywords: string[]) => {
  if (!keywords.length) return text;
  
  // 중복 제거 및 길이순 정렬 (긴 단어 먼저 매칭)
  const uniqueKeywords = Array.from(new Set(keywords));
  const sortedKeywords = uniqueKeywords.sort((a, b) => b.length - a.length);
  
  // 특수문자 이스케이프
  const escapedKeywords = sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
  const pattern = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  const parts = text.split(pattern);
  
  return parts.map((part, i) => {
    const isKeyword = uniqueKeywords.some(k => k.toLowerCase() === part.toLowerCase());
    if (isKeyword) {
      return (
        <span key={i} className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-1 py-0.5 rounded mx-0.5 text-[0.95em]">
          {part}
        </span>
      );
    }
    return part;
  });
};
interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function ExperienceItem({ experience, isLast }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMultipleProjects = experience.projects.length > 1;

  return (
    <div className="relative pl-8 lg:pl-12 pb-16 last:pb-0">
      {/* 타임라인 세로선 */}
      {!isLast && (
        <div className="absolute left-3 lg:left-4 top-4 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-300/30 to-transparent dark:from-indigo-500/50 dark:via-indigo-800/30" />
      )}

      {/* 회사 타임라인 도트 */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring" }}
        className="absolute left-0 lg:left-1 top-1.5 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white dark:bg-gray-950 border-2 border-indigo-500 dark:border-indigo-400 shadow-[0_0_0_4px_rgba(99,102,241,0.1)] z-10 flex items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
      </motion.div>

      {/* 회사 카드 */}
      <motion.div 
        whileHover={{ y: -4 }} 
        transition={{ duration: 0.2 }} 
        className="group relative"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur" />
        <div className="relative bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
          
          {/* 회사 헤더 */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {experience.company}
                </h3>
                {hasMultipleProjects && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800">
                    {experience.projects.length} Projects
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{experience.title}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <span className="font-mono text-sm">{experience.period}</span>
              </div>
            </div>
          </div>

          {/* 회사 설명 */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base lg:text-lg mb-8 font-light">
            {experience.description}
          </p>

          {/* 프로젝트 토글 버튼 */}
          {hasMultipleProjects && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200 mb-6 group/btn border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800"
            >
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover/btn:text-indigo-600 dark:group-hover/btn:text-indigo-400">
                {isExpanded ? "접기" : "상세 프로젝트 보기"}
              </span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 group-hover/btn:text-indigo-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </button>
          )}

          {/* 프로젝트 타임라인 */}
          <motion.div
            initial={false}
            animate={{ 
              height: hasMultipleProjects && !isExpanded ? 0 : "auto", 
              opacity: hasMultipleProjects && !isExpanded ? 0 : 1,
              marginBottom: hasMultipleProjects && !isExpanded ? 0 : 24
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative space-y-8 pl-2">
              {experience.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="relative pl-8 lg:pl-10">
                  {/* 프로젝트 연결선 */}
                  {projectIndex < experience.projects.length - 1 && (
                    <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                  )}

                  {/* 프로젝트 도트 */}
                  <div className="absolute left-0 top-2.5 w-[22px] h-[22px] rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                  </div>

                  {/* 프로젝트 카드 */}
                  <div className="relative">
                    <div className="mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs font-mono text-gray-500 dark:text-gray-500 mb-2">{project.period}</p>
                      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        {highlightText(project.description, [...(project.tags || []), ...COMMON_KEYWORDS])}
                      </p>
                    </div>

                    {/* 프로젝트 성과 */}
                    {project.achievements.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 dark:text-gray-300 text-base flex items-start gap-2.5">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 opacity-60" />
                            <span className="leading-relaxed">
                              {highlightText(achievement, [...(project.tags || []), ...COMMON_KEYWORDS])}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 기술 스택 태그 */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
