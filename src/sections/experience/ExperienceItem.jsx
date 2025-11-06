import { motion } from "framer-motion";

const CARD_HOVER_DURATION_MS = 100;
const CONNECTOR_DURATION_MS = 600;
const DOT_DURATION_MS = 400;

export function ExperienceItem({ experience, index }) {
  return (
    <motion.div className="relative">
      {/* 카드 콘텐츠 */}
      <motion.div
        whileHover={{ x: 8 }}
        transition={{ duration: CARD_HOVER_DURATION_MS / 1000 }}
        className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all overflow-hidden"
      >
        <div className="p-6">
          {/* 회사명 (타이틀) */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.company}</h3>

          {/* 직책 & 기간 */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{experience.title}</span>
            <span>·</span>
            <span>{experience.period}</span>
          </div>

          {/* 설명 */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{experience.description}</p>

          {/* 주요 성과 */}
          <ul className="space-y-2">
            {experience.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
