import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Typewriter = ({ words, period = 2000 }: { words: string[]; period?: number }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words, period]);

  return (
    <span className="inline-flex border-r-2 border-indigo-600 pr-1 animate-pulse">
      {text}
    </span>
  );
};

/**
 * Hero 섹션 컴포넌트
 * 메인 소개 영역
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-gray-900"
    >
      {/* 메인 콘텐츠 */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 메인 타이틀 */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block mb-2 font-medium text-gray-500 dark:text-gray-400 text-3xl md:text-4xl">안녕하세요, 저는</span>
            <span className="relative inline-block text-indigo-600 dark:text-indigo-400 font-extrabold">
              <Typewriter 
                words={["창의적인", "사용자 중심의", "성장하는", "도전적인"]} 
                period={2000}
              />
            </span>
            <br />
            <span className="block mt-2">프론트엔드 개발자입니다.</span>
          </motion.h1>

          {/* 서브 텍스트 */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            사용자에게 더 나은 경험을 제공하기 위해 끊임없이 고민하고,<br className="hidden md:block" />
            새로운 기술을 습득하여 가치 있는 웹 서비스를 만들어갑니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              프로젝트 살펴보기
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              연락하기
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-start justify-center p-1"
        >
          <motion.div
            className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
