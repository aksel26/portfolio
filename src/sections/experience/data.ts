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
    period: "2022.09 - 재직중",
    title: "Front-End, 선임",
    company: "(주) 에이시지알",
    description: "인재선발∙관리∙육성 과정에 필요한 모든 솔루션을 제공 ",
    projects: [
      {
        name: "ACG 식대관리",
        period: "2024.7 - 2025.8",
        description: "ACG 회사 직원들이 식대를 보다 편리하게 기록할 수 있도록 기획한 단독 개발 사이드 프로젝트",
        achievements: [
          "외부 접근 불가 서버 환경을 AWS 기반 아키텍처로 전환해 접근성 확보",
          "Firebase 생태계로의 마이그레이션으로 월 비용 100% 절감 달성 (AWS S3→Firebase Storage, EC2→Functions)",
          "Google Sheets API를 연동한 원클릭 식대 정산 시스템을 구축하여 수동 업무 자동화",
          "Vercel CI/CD 파이프라인을 도입해 배포 자동화 및 생산성 향상",
          "PWA 버전 관리 자동화를 구현해 업데이트 시 수동 Worker 관리 문제를 해소하고 안정성을 확보",
          "Monorepo 구조를 도입해 User 앱, UI 패키지, 공용 함수 분리를 통해 향후 어드민 사이트 확장 기반 마련",
        ],
        tags: ["React", "Next.js", "Firebase", "AWS", "Google Sheets API"],
      },
      {
        name: "WorkDNA - 직장인 성격 유형 테스트",
        period: "2025.07",
        description: "외부 유료 성격진단 서비스를 대체하기 위한 사내 과제 프로젝트",
        achievements: [
          "Claude AI, Google AI 등 툴 활용해 UI/UX 디자인 기획 및 구현",
          "모바일 퍼스트 반응형 디자인으로 사용자 접근성 강화",
          "localStorage–Supabase 실시간 동기화로 새로고침 시 데이터 손실을 방지하고 안정적인 사용자 경험 제공",
          "SEO 및 SSR이 불필요해 Next.js 대신 React + Vite 선택 → 빠른 개발 속도 확보",
          "Kakao API를 통한 결과 공유 기능 및 OG 이미지 설정 구현",
          "i18n 라이브러리를 적용해 다국어 지원(영어) 구현",
        ],
        tags: ["React", "Vite", "Supabase", "Kakao API", "i18n"],
      },
      {
        name: "KIA 면접위원 교육 결과 레포트 자동화 시스템",
        period: "2025.07.11 - 2025.07.28",
        description: "Excel 데이터 기반 HTML 레포트 자동 생성 시스템을 단독 개발하여 운영팀의 수작업 프로세스를 완전 자동화",
        achievements: [
          "서버사이드 환경에서 SheetJS를 활용해 Excel 파일 파싱 및 구조화 기능 구현",
          "수작업 프로세스 자동화로 운영팀 업무 효율성 90% 향상",
          "스트림 처리 방식을 적용하여 대용량 파일 처리 시스템 구현",
          "Handlebars 템플릿 엔진을 도입해 동적 HTML 레포트 생성 시스템 구축",
          "Chart.js를 활용하여 막대/원형 차트 시각화 기능 구현",
          "JSZip을 적용해 다중 HTML 파일 압축 다운로드 기능 제공",
        ],
        tags: ["Node.js", "SheetJS", "Handlebars", "Chart.js", "JSZip"],
      },
      {
        name: "SK mySUNI 성격진단 서비스 웹 애플리케이션",
        period: "2024.09",
        description: "기존 외부 설문조사 사이트와 ACG 인재 진단 분석 툴 간의 데이터 연동 시스템 개발",
        achievements: [
          "Next.js API Routes를 활용해 smore-ACG 간 데이터 변환 및 연동 시스템 구현",
          "기존에 존재하지 않던 자동화 파이프라인을 개발하여 데이터 처리 효율성 향상",
          "Sharp 라이브러리를 활용한 useImages 훅 구현, webp 이미지 최적화로 로딩 성능 개선",
          "Swiper.js 기반 진단 문항 슬라이드 시스템 구축",
          "Winston 로깅 시스템을 기반으로 useClientLogger 훅 개발",
          "사용자 행동 및 에러 추적 자동화로 서비스 운영 안정성 확보",
        ],
        tags: ["Next.js", "Sharp", "Swiper.js", "Winston"],
      },
      {
        name: "ACG HRel 세미나 초대 페이지 프로젝트",
        period: "2024.06",
        description: "세미나 정보 전달 및 참가 신청을 위한 웹 사이트 개발",
        achievements: [
          "Framer Motion을 활용해 스크롤 동기화 애니메이션 시스템 구현",
          "다단계 모달 기반 세미나 신청 시스템 구현",
          "Recoil 기반 전역 상태 관리 시스템 설계",
          "props drilling 제거로 컴포넌트 간 데이터 접근성 향상",
        ],
        tags: ["React", "Framer Motion", "Recoil"],
      },
      {
        name: "온라인 인적성 검사 플랫폼 Back Office구축",
        period: "2022.09 - 현재 사용중",
        description: "기존 오프라인 인적성 검사 시스템의 온라인 전환을 위한 통합 백오피스 솔루션",
        achievements: [
          "Web Worker를 활용해 수만 건 응시자 데이터 조회 시 UI 블로킹 문제 해결",
          "Intersection Observer + useInfiniteQuery 기반 무한 스크롤 구현으로 채팅 데이터 초기 렌더링 시간 97% 단축 (3초 → 0.1초)",
          "useMemo / useCallback 최적화 및 커스텀 훅 개발로 메모리 사용량 절감 및 채팅 UX 품질 강화",
          "재귀 함수 기반 동적 프로그레스바 구현하여 대용량 PDF/HTML 변환 다운로드시 실시간 진행률 표시",
          "수학 수식 입력 기능 구현",
          "고객사별 동적 웹폰트 로딩 시스템 구축",
        ],
        tags: ["React", "React Query", "Web Worker", "Intersection Observer"],
      },
    ],
  },
  {
    period: "2022.02 - 2022.07",
    title: "Front-End, 사원",
    company: "(주) 서울리시",
    description: "기존 쇼핑 플랫폼 기능을 보완하기 위한 맞춤형 백오피스 시스템 개발",
    projects: [
      {
        name: "맞춤형 백오피스 시스템 개발",
        period: "2022.02 - 2022.07",
        description: "기존 쇼핑 플랫폼 기능을 보완하기 위한 맞춤형 백오피스 시스템 개발",
        achievements: [
          "병렬 처리 시 발생한 업로드 순서 불일치 문제를 해결해 요청 순서의 일관성 보장",
          "GraphQL Apollo Client 기반 데이터 페칭 최적화",
          "주문,고객,재고 등 복잡한 데이터를 통합 관리할 수 있는 백오피스 시스템 구축",
          "React Hook Form과 Ant Design을 활용해 직관적 UI/UX 설계",
        ],
        tags: ["React", "GraphQL", "Apollo Client", "Ant Design"],
      },
    ],
  },
  {
    period: "2021.05 - 2021.10",
    title: "Front-End, 사원",
    company: "(주) 넥스트컬쳐",
    description: "에리치 요양정보 플랫폼 BackOffice 개발",
    projects: [
      {
        name: "에리치 요양정보 플랫폼 BackOffice 개발",
        period: "2021.05 - 2021.10",
        description: "에리치 요양정보 플랫폼 BackOffice 개발",
        achievements: [
          "SSR 환경에서 서버-클라이언트 간 상태 불일치 문제를 해결해 안정적인 데이터 동기화 구현",
          "Redux 스토어 Hydration 아키텍처 구축으로 페이지 새로고침/이동 시 상태 유지 및 불필요한 API 재호출 방지",
        ],
        tags: ["React", "Redux", "SSR"],
      },
    ],
  },
];
