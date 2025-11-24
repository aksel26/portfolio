import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.index === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h2>
          <Link to="/projects" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          {/* <div className="relative h-64 sm:h-80 md:h-[500px] rounded-xl overflow-hidden mb-12 bg-gray-100 dark:bg-gray-800"> */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h1>
            <img
              src={project.image}
              alt={project.title}
              className="h-64 sm:h-80 md:h-[500px] rounded-xl object-cover mx-auto my-8"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-10"> */}
            {/* </div> */}
          {/* </div> */}

          {/* Content Section */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Detailed Content */}
            {project.details && (
              <div className="space-y-16 mb-16">
                {/* Overview */}
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                    개요
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg font-light">
                    {project.details.overview}
                  </p>
                </section>

                {/* Troubleshooting */}
                {project.details.troubleshooting && project.details.troubleshooting.length > 0 && (
                  <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                      <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                      트러블 슈팅
                    </h3>
                    <div className="grid grid-cols-1 gap-8">
                      {project.details.troubleshooting.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
                        >
                          <div className="p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                                {index + 1}
                              </span>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mt-0.5">
                                {item.title}
                              </h4>
                            </div>

                            <div className="flex flex-col gap-8">
                              {/* Top: Image */}
                              {item.image && (
                                <motion.div
                                  className="p-4 rounded-xl overflow-hidden bg-white dark:bg-gray-900 cursor-zoom-in border border-gray-200 dark:border-gray-700 shadow-sm"
                                  onClick={() => item.image && setSelectedImage(item.image)}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-cover"
                                  />
                                </motion.div>
                              )}

                              {/* Bottom: Content sections */}
                              <div className="space-y-6">
                                {/* Problem */}
                                <div>
                                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">Problem</span>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{item.problem}</p>
                                </div>

                                {/* Solution */}
                                <div>
                                  <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2 block">Solution</span>
                                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{item.solution}</p>
                                </div>

                                {/* Result */}
                                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                                  <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">Result</span>
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-md whitespace-pre-line">{item.result}</p>
                                </div>

                                {/* Learning */}
                                <div>
                                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 block">Learning</span>
                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-md whitespace-pre-line">{item.learning}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-100 dark:border-gray-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Zoomed view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl bg-white p-4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
