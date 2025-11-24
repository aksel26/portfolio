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
    <div className="relative pl-8 lg:pl-12 pb-12 last:pb-0">
      {/* 타임라인 세로선 */}
      {!isLast && (
        <div className="absolute left-3 lg:left-4 top-4 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      )}

      {/* 회사 타임라인 도트 */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring" }}
        className="absolute left-[5px] lg:left-[9px] top-2 w-3.5 h-3.5 rounded-full bg-white dark:bg-gray-950 border-[3px] border-indigo-500 dark:border-indigo-400 z-10"
      />

      {/* 회사 카드 */}
      <motion.div 
        className="group relative"
      >
        <div className="relative">
          
          {/* 회사 헤더 */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {experience.company}
                </h3>
                {hasMultipleProjects && (
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                    {experience.projects.length} Projects
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-700 dark:text-gray-300">{experience.title}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <span className="font-mono text-xs">{experience.period}</span>
              </div>
            </div>
          </div>

          {/* 회사 설명 */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base mb-6">
            {experience.description}
          </p>

          {/* 프로젝트 토글 버튼 */}
          {hasMultipleProjects && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors mb-4 group/btn"
            >
              <span>{isExpanded ? "Hide Projects" : "View Projects"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="space-y-8 pt-2">
              {experience.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="relative pl-4 border-l-2 border-gray-100 dark:border-gray-800 ml-1">
                  
                  {/* 프로젝트 카드 */}
                  <div className="relative">
                    <div className="mb-3">
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        {project.name}
                      </h4>
                      <p className="text-xs font-mono text-gray-500 dark:text-gray-500 mb-2">{project.period}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        {highlightText(project.description, [...(project.tags || []), ...COMMON_KEYWORDS])}
                      </p>
                    </div>

                    {/* 프로젝트 성과 */}
                    {project.achievements.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0 opacity-60" />
                            <span className="leading-relaxed">
                              {highlightText(achievement, [...(project.tags || []), ...COMMON_KEYWORDS])}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* 기술 스택 태그 */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 text-[11px] font-medium bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded border border-gray-100 dark:border-gray-700"
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
