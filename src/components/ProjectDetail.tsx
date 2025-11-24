import { motion } from "framer-motion";
import { X, Github, ExternalLink, AlertCircle, CheckCircle, Lightbulb } from "lucide-react";
import { useEffect } from "react";

interface ProjectDetailContent {
  overview: string;
  troubleshooting?: {
    title: string;
    problem: string;
    solution: string;
    result: string;
    learning: string;
  }[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  index: number;
  details?: ProjectDetailContent;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        layoutId={`project-${project.index}`}
        className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-96 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar w-full">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert  mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Detailed Content */}
            {project.details && (
              <div className="mt-8 space-y-10">
                {/* Overview */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">개요</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.details.overview}
                  </p>
                </section>

                {/* Troubleshooting */}
                {project.details.troubleshooting && project.details.troubleshooting.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">트러블 슈팅</h3>
                    <div className="space-y-8">
                      {project.details.troubleshooting.map((item, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                          <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                            {item.title}
                          </h4>
                          
                          <div className="space-y-4">
                            <div className="flex gap-3">
                              <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-gray-900 dark:text-white block mb-1">문제 상황</span>
                                <p className="text-gray-600 dark:text-gray-300">{item.problem}</p>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-gray-900 dark:text-white block mb-1">해결 과정</span>
                                <p className="text-gray-600 dark:text-gray-300">{item.solution}</p>
                              </div>
                            </div>

                            <div className="pl-9">
                              <span className="font-bold text-gray-900 dark:text-white block mb-1">성과</span>
                              <p className="text-gray-600 dark:text-gray-300">{item.result}</p>
                            </div>

                            <div className="flex gap-3 pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                              <Lightbulb className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-gray-900 dark:text-white block mb-1">배운점</span>
                                <p className="text-gray-600 dark:text-gray-300">{item.learning}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

