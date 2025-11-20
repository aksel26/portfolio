export interface Project {
  name: string;
  period: string;
  description: string;
  achievements: string[];
  tags?: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  projects: Project[];
}

export const EXPERIENCES: Experience[] = [
  {
    period: "2023.03 - 현재",
    title: "시니어 프론트엔드 개발자",
    company: "테크 스타트업",
    description: "React 기반 SaaS 플랫폼 개발 및 리드를 담당하고 있습니다.",
    projects: [
      {
        name: "SaaS 플랫폼 v3.0 리뉴얼",
        period: "2024.09 - 현재",
        description: "전체 플랫폼의 UI/UX 개선 및 성능 최적화",
        achievements: ["웹 성능 개선으로 로딩 시간 40% 단축", "lighthouse 점수 85점 → 98점 향상"],
        tags: ["React", "TypeScript", "Vite"],
      },
      {
        name: "디자인 시스템 구축",
        period: "2024.06 - 2024.08",
        description: "재사용 가능한 컴포넌트 라이브러리 개발",
        achievements: ["50+ 컴포넌트 라이브러리 구축", "Storybook 문서화", "개발 생산성 30% 향상"],
        tags: ["React", "Storybook", "Tailwind CSS"],
      },
      {
        name: "TypeScript 마이그레이션",
        period: "2024.03 - 2024.05",
        description: "레거시 JavaScript 코드베이스의 TypeScript 전환",
        achievements: ["전체 코드베이스 100% TypeScript 전환", "타입 안정성 확보로 런타임 에러 60% 감소"],
        tags: ["TypeScript", "React"],
      },
      {
        name: "실시간 협업 기능 개발",
        period: "2023.12 - 2024.02",
        description: "WebSocket 기반 실시간 동시편집 시스템 구축",
        achievements: ["실시간 동시편집 기능 구현", "충돌 해결 알고리즘 적용", "동시 접속 100명+ 처리"],
        tags: ["WebSocket", "React", "Redux"],
      },
      {
        name: "대시보드 v2.0 개발",
        period: "2023.09 - 2023.11",
        description: "데이터 시각화 및 분석 대시보드 구축",
        achievements: ["차트 라이브러리 통합", "실시간 데이터 업데이트", "반응형 레이아웃 구현"],
        tags: ["React", "D3.js", "Chart.js"],
      },
      {
        name: "인증 시스템 개선",
        period: "2023.06 - 2023.08",
        description: "보안 강화 및 소셜 로그인 통합",
        achievements: ["OAuth 2.0 구현", "JWT 기반 인증 시스템 구축", "보안 취약점 제로화"],
        tags: ["OAuth", "JWT", "React"],
      },
      {
        name: "모바일 앱 웹뷰 개발",
        period: "2023.03 - 2023.05",
        description: "React Native 웹뷰 통합 및 네이티브 브릿지 구현",
        achievements: ["웹-앱 간 seamless 연동", "푸시 알림 시스템 구축", "앱 성능 최적화"],
        tags: ["React", "React Native", "WebView"],
      },
    ],
  },
  {
    period: "2021.06 - 2023.02",
    title: "프론트엔드 개발자",
    company: "디지털 에이전시",
    description: "다양한 클라이언트 프로젝트에서 웹 애플리케이션 개발을 담당했습니다.",
    projects: [
      {
        name: "대기업 커머스 플랫폼 구축",
        period: "2021.06 - 2023.02",
        description: "대규모 이커머스 사이트 풀스택 개발 참여",
        achievements: [
          "10개 이상의 클라이언트 프로젝트 성공적 완수",
          "반응형 디자인 시스템 구축",
          "웹 접근성 개선 (WCAG 2.1 AA 준수)",
          "결제 시스템 통합",
        ],
        tags: ["React", "Vue.js", "Next.js"],
      },
    ],
  },
  {
    period: "2020.01 - 2021.05",
    title: "주니어 웹 개발자",
    company: "스타트업",
    description: "HTML, CSS, JavaScript를 활용한 웹 페이지 개발 및 유지보수를 담당했습니다.",
    projects: [
      {
        name: "자사 서비스 웹사이트 리뉴얼",
        period: "2020.01 - 2021.05",
        description: "레거시 jQuery 기반 서비스의 React 마이그레이션",
        achievements: [
          "React로 레거시 jQuery 코드 마이그레이션",
          "UI/UX 개선으로 사용자 만족도 25% 향상",
          "Git 워크플로우 및 코드 리뷰 프로세스 도입",
        ],
        tags: ["React", "jQuery", "JavaScript"],
      },
    ],
  },
];
