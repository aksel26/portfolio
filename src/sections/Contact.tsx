import { motion } from "framer-motion";

interface ContactLink {
  name: string;
  value: string;
  href: string;
}

/**
 * Contact 섹션 컴포넌트
 * 미니멀한 디자인의 연락처 정보 및 소셜 링크
 * Footer 통합
 */
export default function Contact() {

  const contacts: ContactLink[] = [
    {
      name: "Email",
      value: "kevinxkim2023@gmail.com",
      href: "mailto:kevinxkim2023@gmail.com",
    },
    {
      name: "GitHub",
      value: "github.com/aksel26",
      href: "https://github.com/aksel26",
    },
    {
      name: "Blog",
      value: "aksel26.netlify.app",
      href: "https://aksel26.netlify.app/",
    },
  ];

  return (
    <section id="contact" className="snap-section flex flex-col bg-white dark:bg-gray-950 py-20 lg:py-32 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1">
        {/* 타이틀 섹션 - 중앙 정렬 */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 dark:text-white mb-8 tracking-tight">Contact</h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 언제든지 연락주세요.
            </p>
          </motion.div>
        </div>

        {/* 콘텐츠 */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* 메인 이메일 CTA */}
            <div className="text-center">
              <motion.a
                href="mailto:kevinxkim2023@gmail.com"
                className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors tracking-tight"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                kevinxkim2023@gmail.com
              </motion.a>
            </div>

            {/* 소셜 링크 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-12 border-t border-gray-100 dark:border-gray-800">
              {contacts.slice(1).map((contact) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {contact.name}
                  </span>
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {contact.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer 통합 */}
      <motion.div 
        className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            © 2024 Frontend Developer Portfolio. All rights reserved.
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Built with React, Tailwind CSS, and Framer Motion
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

