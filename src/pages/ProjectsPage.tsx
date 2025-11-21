import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, Project } from "../data/projects";
import { ArrowLeft, Briefcase } from "lucide-react";
import Footer from "../components/Footer";
import { useMemo } from "react";

/**
 * Projects 페이지 컴포넌트
 * 회사별로 그룹화된 프로젝트 표시
 */
export default function ProjectsPage() {
  // 회사별로 프로젝트 그룹화
  const projectsByCompany = useMemo(() => {
    const grouped = projects.reduce((acc, project) => {
      const company = project.company;
      if (!acc[company]) {
        acc[company] = [];
      }
      acc[company].push(project);
      return acc;
    }, {} as Record<string, Project[]>);

    // 회사명 순서 정의 (ACG를 맨 위로)
    const companyOrder = ["ACG", "Startup X", "Freelance", "Personal"];
    const sortedGroups = Object.entries(grouped).sort(([a], [b]) => {
      const indexA = companyOrder.indexOf(a);
      const indexB = companyOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return a.localeCompare(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    return sortedGroups;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 뒤로가기 버튼 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>홈으로 돌아가기</span>
          </Link>
        </motion.div>

        {/* 타이틀 섹션 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 dark:text-white mb-6">
              All Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              다양한 프로젝트를 통해 얻은 경험과 기술을 소개합니다.
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              총 {projects.length}개의 프로젝트
            </div>
          </motion.div>
        </div>

        {/* 회사별로 그룹화된 프로젝트 */}
        <div className="space-y-20">
          {projectsByCompany.map(([company, companyProjects], groupIndex) => (
            <motion.section
              key={company}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              {/* 회사명 헤더 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {company}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({companyProjects.length})
                  </span>
                </div>
                <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              </div>

              {/* 프로젝트 그리드 */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {companyProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

/**
 * 개별 프로젝트 카드 컴포넌트
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
