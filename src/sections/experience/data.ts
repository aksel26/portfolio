export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    period: "2023.03 - 현재",
    title: "시니어 프론트엔드 개발자",
    company: "테크 스타트업",
    description: "React 기반 SaaS 플랫폼 개발 및 리드를 담당하고 있습니다. 팀 내 코드 리뷰와 아키텍처 설계를 주도하며, 신입 개발자 멘토링을 진행하고 있습니다.",
    achievements: ["웹 성능 개선으로 로딩 시간 40% 단축", "TypeScript 마이그레이션 프로젝트 리드", "컴포넌트 라이브러리 구축 및 문서화"],
  },
  {
    period: "2021.06 - 2023.02",
    title: "프론트엔드 개발자",
    company: "디지털 에이전시",
    description:
      "다양한 클라이언트 프로젝트에서 웹 애플리케이션 개발을 담당했습니다. React, Vue.js 등 다양한 프레임워크를 활용하여 프로젝트를 성공적으로 완수했습니다.",
    achievements: ["10개 이상의 클라이언트 프로젝트 성공적 완수", "반응형 디자인 시스템 구축", "웹 접근성 개선 (WCAG 2.1 AA 준수)"],
  },
  {
    period: "2020.01 - 2021.05",
    title: "주니어 웹 개발자",
    company: "스타트업",
    description: "HTML, CSS, JavaScript를 활용한 웹 페이지 개발 및 유지보수를 담당했습니다. React를 학습하며 모던 프론트엔드 개발 경험을 쌓았습니다.",
    achievements: ["React로 레거시 jQuery 코드 마이그레이션", "UI/UX 개선으로 사용자 만족도 25% 향상", "Git 워크플로우 및 코드 리뷰 프로세스 도입"],
  },
];
