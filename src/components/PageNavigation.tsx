import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/**
 * 페이지 네비게이션 컴포넌트
 * 오른쪽 가장자리에 고정된 섹션 네비게이션
 */
export default function PageNavigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const visibleSections = useRef(new Set<string>());

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      // 가장 중앙에 가까운 섹션 찾기
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const windowCenter = window.innerHeight / 2;
      let closestSection: string | null = null;
      let closestDistance = Infinity;

      sectionElements.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - windowCenter);

          if (rect.top < windowCenter && rect.bottom > windowCenter) {
            // 섹션이 화면 중앙에 있으면 우선순위
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = id;
            }
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      } else {
        // 화면 중앙에 없으면 가장 가까운 섹션 선택
        sectionElements.forEach(({ id, element }) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(sectionCenter - windowCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = id;
            }
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        }
      }
    };

    // 초기 업데이트
    updateActiveSection();

    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center"
              aria-label={`Navigate to ${section.label}`}
            >
              {/* 도트 */}
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-colors ${
                  activeSection === section.id
                    ? "bg-indigo-600 border-indigo-600"
                    : "bg-transparent border-gray-400 dark:border-gray-600"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />

              {/* 라벨 (호버 시 표시) */}
              <span
                className={`absolute right-6 px-3 py-1 text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  activeSection === section.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 dark:bg-gray-700 text-white"
                }`}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
