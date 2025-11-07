import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Contact {
  name: string;
  value: string;
  href: string;
  icon: ReactNode;
}

/**
 * Contact 섹션 컴포넌트
 * 연락처 정보 및 소셜 링크
 */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 타이틀 opacity: 섹션이 화면에 들어올 때 fade-in, 나갈 때 fade-out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  const contacts: Contact[] = [
    {
      name: "Email",
      value: "developer@example.com",
      href: "mailto:developer@example.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "github.com/developer",
      href: "https://github.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/developer",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Blog",
      value: "blog.example.com",
      href: "https://blog.example.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} id="contact" className="snap-section flex items-center bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 왼쪽: 타이틀 (Sticky) */}
          <div className="lg:col-span-4">
            <motion.div style={{ opacity: titleOpacity }} className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">Contact</h2>
              <div className="w-20 h-1.5 bg-indigo-600 mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 언제든지 연락주세요!
              </p>
            </motion.div>
          </div>

          {/* 오른쪽: 콘텐츠 */}
          <div className="lg:col-span-8">
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {contacts.map((contact) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 p-4 md:p-5 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg text-indigo-600 dark:text-indigo-400">{contact.icon}</div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{contact.name}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA 섹션 */}
            <motion.div
              className="bg-linear-to-br from-indigo-600 to-indigo-500 rounded-2xl p-6 md:p-8 shadow-xl shadow-indigo-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">함께 일하고 싶으신가요?</h3>
              <p className="text-white/90 mb-6 max-w-xl text-sm md:text-base leading-relaxed">
                프론트엔드 개발, UI/UX 개선, 또는 기술 컨설팅이 필요하시다면 언제든지 연락해주세요.
              </p>
              <motion.a
                href="mailto:developer@example.com"
                className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                이메일 보내기
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
