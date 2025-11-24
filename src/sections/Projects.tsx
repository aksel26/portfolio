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
      className="group relative h-[450px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
    >
      <Link to={`/project/${project.index}`} className="block h-full relative">
        {/* Full Background Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-none transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Project Number Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full shadow-lg">
            {project.index}
          </span>
        </div>

        {/* Content Overlay - Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20">
          <div className="flex flex-col gap-2">
            {/* Company & Period */}
            <div className="flex items-center justify-between mb-1">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-300 bg-indigo-900/50 border border-indigo-500/30 rounded-full backdrop-blur-sm">
                {project.company}
              </span>
              {project.period && (
                <span className="text-xs text-gray-300 font-medium bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
                  {project.period}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] font-medium text-gray-200 bg-white/10 border border-white/10 rounded-md backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-[10px] font-medium text-gray-200 bg-white/10 border border-white/10 rounded-md backdrop-blur-sm">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
