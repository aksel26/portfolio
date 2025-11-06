import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCountAnimation } from "../hooks/useCountAnimation";

/**
 * Projects 섹션 컴포넌트
 * 리스트 형식의 카드 UI
 */
export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 타이틀 opacity: 섹션이 화면에 들어올 때 fade-in, 나갈 때 fade-out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "이커머스 플랫폼",
      description:
        "사용자 친화적인 쇼핑 경험을 제공하는 풀스택 이커머스 웹사이트입니다. 장바구니, 결제, 주문 관리 등의 핵심 기능을 구현했으며, 반응형 디자인과 성능 최적화에 중점을 두었습니다.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "#",
      demo: "#",
      index: 1,
    },
    {
      title: "날씨 대시보드",
      description:
        "실시간 날씨 정보와 7일 예보를 제공하는 반응형 웹 애플리케이션입니다. OpenWeather API를 활용했으며, Chart.js로 데이터 시각화를 구현했습니다.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["React", "API", "Chart.js"],
      github: "#",
      demo: "#",
      index: 2,
    },
    {
      title: "포트폴리오 빌더",
      description:
        "개발자들이 쉽게 포트폴리오를 만들 수 있는 드래그 앤 드롭 기반 웹 빌더입니다. 직관적인 인터페이스로 누구나 손쉽게 전문적인 포트폴리오를 제작할 수 있습니다.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      tags: ["Next.js", "React DnD", "Tailwind CSS"],
      github: "#",
      demo: "#",
      index: 3,
    },
    {
      title: "태스크 관리 앱",
      description: "팀 협업을 위한 칸반 보드 스타일의 태스크 관리 애플리케이션입니다. 드래그 앤 드롭으로 직관적인 UX를 제공하며, 실시간 동기화를 지원합니다.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Framer Motion"],
      github: "#",
      demo: "#",
      index: 4,
    },
    {
      title: "소셜 미디어 분석 도구",
      description: "다양한 소셜 미디어 플랫폼의 데이터를 수집하고 분석하는 대시보드입니다. 실시간 트렌드 분석과 인사이트 리포트를 제공합니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      index: 5,
    },
    {
      title: "실시간 채팅 애플리케이션",
      description: "WebSocket 기반의 실시간 채팅 플랫폼입니다. 그룹 채팅, 파일 공유, 이모지 반응 등 다양한 기능을 지원합니다.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      tags: ["React", "Socket.io", "Express", "Redis"],
      github: "#",
      demo: "#",
      index: 6,
    },
    {
      title: "AI 이미지 갤러리",
      description: "AI 기반 이미지 검색과 자동 태깅 기능을 갖춘 갤러리 애플리케이션입니다. 머신러닝을 활용한 스마트 검색을 제공합니다.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      tags: ["Next.js", "TensorFlow.js", "AWS S3"],
      github: "#",
      demo: "#",
      index: 7,
    },
    {
      title: "음악 스트리밍 플랫폼",
      description: "반응형 디자인과 직관적인 UI로 최적화된 음악 스트리밍 서비스입니다. 플레이리스트 생성, 추천 알고리즘 등을 구현했습니다.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      tags: ["React", "Redux", "Web Audio API", "Spotify API"],
      github: "#",
      demo: "#",
      index: 8,
    },
  ];

  // 프로젝트 개수 카운트 애니메이션
  const { rounded, ref: countRef } = useCountAnimation(projects.length, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section ref={sectionRef} id="projects" className="snap-section py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* 왼쪽: 타이틀 (Sticky) */}
          <div className="lg:col-span-4">
            <motion.div
              style={{ opacity: titleOpacity }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Featured Projects
              </h2>
              <div className="w-20 h-1.5 bg-indigo-600 mb-6 rounded-full"></div>
              <div ref={countRef} className="mb-4 flex items-baseline gap-2">
                <motion.div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{rounded}</motion.div>
                <span className="text-xl text-gray-600 dark:text-gray-400">Projects</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                다양한 프로젝트를 통해 얻은 경험과 기술을 소개합니다.
              </p>
            </motion.div>
          </div>

          {/* 오른쪽: 프로젝트 카드 리스트 */}
          <div className="lg:col-span-8">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 개별 프로젝트 카드 컴포넌트
 * 왼쪽: 썸네일, 오른쪽: 설명
 */
function ProjectCard({ project }) {
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
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="grid md:grid-cols-5 gap-0">
        {/* 왼쪽: 썸네일 이미지 (2/5) */}
        <div className="md:col-span-2 relative overflow-hidden">
          {/* 프로젝트 번호 */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg shadow-lg">
              #{project.index}
            </span>
          </div>

          {/* 이미지 */}
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* 그라데이션 오버레이 */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-gray-50/50 dark:to-gray-800/50 md:block hidden"></div>

            {/* 호버 오버레이 */}
            <motion.div
              className="absolute inset-0 bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.a
                href={project.github}
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
              <motion.a
                href={project.demo}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* 오른쪽: 설명 (3/5) */}
        <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
          {/* 카테고리 라벨 */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-indigo-600"></div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Featured Work</span>
          </div>

          {/* 제목 */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          {/* 설명 */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
            {project.description}
          </p>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 버튼 그룹 (데스크탑에서만 표시) */}
          <div className="hidden md:flex gap-4 pt-4">
            <motion.a
              href={project.github}
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-500 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Code
            </motion.a>
            <motion.a
              href={project.demo}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
