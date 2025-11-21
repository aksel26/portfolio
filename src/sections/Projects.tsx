import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, Project } from "../data/projects";
import { ArrowRight } from "lucide-react";

/**
 * Projects 섹션 컴포넌트
 * 가로 카드 그리드 UI
 */
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // 초기에 4개만 표시
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="snap-section py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* 타이틀 섹션 - 중앙 정렬 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 dark:text-white mb-6">Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              다양한 프로젝트를 통해 얻은 경험과 기술을 소개합니다.
            </p>
          </motion.div>
        </div>

        {/* 프로젝트 카드 그리드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* 더보기 버튼 */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <span>프로젝트 더보기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

/**
 * 개별 프로젝트 카드 컴포넌트
 * 상단: 썸네일, 하단: 설명
 */
function ProjectCard({ project }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.div
      layoutId={`project-${project.index}`}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <Link to={`/project/${project.index}`} className="block">
        {/* 썸네일 이미지 */}
        <div className="relative overflow-hidden h-64">
          {/* 프로젝트 번호 */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-lg">
              #{project.index}
            </span>
          </div>

          {/* 이미지 */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          {/* 호버 오버레이 */}
          <motion.div
            className="absolute inset-0 bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-white font-semibold text-lg">View Details</span>
          </motion.div>
        </div>

        {/* 콘텐츠 */}
        <div className="p-6">
          {/* 회사명 배지 */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
              {project.company}
            </span>
          </div>

          {/* 제목 */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* 기간 */}
          {project.period && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {project.period}
            </p>
          )}

          {/* 설명 */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
