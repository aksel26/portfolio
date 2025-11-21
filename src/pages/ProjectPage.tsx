import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, AlertCircle, CheckCircle, Lightbulb, X } from 'lucide-react';
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
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
              {project.description}
            </p> */}

            {/* Detailed Content */}
            {project.details && (
              <div className="space-y-12 mb-12">
                {/* Overview */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">개요</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.details.overview}
                  </p>
                </section>

                {/* Troubleshooting */}
                {project.details.troubleshooting && project.details.troubleshooting.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">트러블 슈팅</h3>
                    <div className="space-y-6">
                      {project.details.troubleshooting.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative"
                        >
                          {/* Timeline connector */}
                          {index < (project.details?.troubleshooting?.length ?? 0) - 1 && (
                            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent dark:from-indigo-400/30" />
                          )}
                          
                          <div className="relative bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50">
                            {/* Gradient accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                            
                            <div className="p-8">
                              {/* Header with number badge */}
                              <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                  </h4>
                                </div>
                              </div>

                              {/* Image */}
                              {item.image && (
                                <motion.div 
                                  className="mb-8 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900/50 cursor-zoom-in border border-gray-200 dark:border-gray-700 p-3 hover:border-indigo-500/50 transition-all duration-300"
                                  onClick={() => item.image && setSelectedImage(item.image)}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                >
                                  <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-auto object-cover rounded-lg"
                                  />
                                </motion.div>
                              )}
                              
                              {/* Content sections */}
                              <div className="space-y-6">
                                {/* Problem */}
                                <div className="flex gap-4">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-red-500" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="font-semibold text-gray-900 dark:text-white block mb-2">문제 상황</span>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.problem}</p>
                                  </div>
                                </div>

                                {/* Solution */}
                                <div className="flex gap-4">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="font-semibold text-gray-900 dark:text-white block mb-2">해결 과정</span>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{item.solution}</p>
                                  </div>
                                </div>

                                {/* Result */}
                                <div className="pl-14">
                                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border-l-4 border-indigo-500">
                                    <span className="font-semibold text-gray-900 dark:text-white block mb-2">성과</span>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.result}</p>
                                  </div>
                                </div>

                                {/* Learning */}
                                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                  </div>
                                  <div className="flex-1">
                                    <span className="font-semibold text-gray-900 dark:text-white block mb-2">배운점</span>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.learning}</p>
                                  </div>
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
                className="flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-lg"
              >
                <Github size={24} />
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
              >
                <ExternalLink size={24} />
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
