import acgThumbnail from '../assets/projects/acg-thumbnail.png';
import acgTs1 from '../assets/projects/acg-ts-1.png';
import acgTs2 from '../assets/projects/acg-ts-2.png';
import acgTs3 from '../assets/projects/acg-ts-3.png';

export interface ProjectDetailContent {
  overview: string;
  troubleshooting?: {
    title: string;
    problem: string;
    solution: string;
    result: string;
    learning: string;
    image?: string;
  }[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  index: number;
  company: string; // 회사명 또는 카테고리 (예: "ACG", "Personal", etc.)
  period?: string; // 프로젝트 기간 (선택사항)
  details?: ProjectDetailContent;
}

export const projects: Project[] = [
  {
    title: "온라인 인적성 검사 Back Office",
    description:
      "기존 오프라인 중심의 인적성 검사 환경에서 온라인 전환이 가속화됨에 따라, 인적성 검사 운영 전 과정을 통합 관리 할 수 있는 온라인 플랫폼 구축 프로젝트입니다.",
    image: acgThumbnail,
    tags: ["React", "TypeScript", "React Query", "Web Worker"],
    github: "#",
    demo: "#",
    index: 1,
    company: "ACG",
    period: "2023.01 - 2024.12",
    details: {
      overview: "기존 오프라인 중심의 인적성 검사 환경에서 온라인 전환이 가속화됨에 따라, 검사 운영 전 과정을 디지털화하고 통합 관리할 수 있는 온라인 플랫폼 프로젝트입니다.",
      troubleshooting: [
        {
          title: "Web Worker를 활용한 API Fetching",
          problem: "공고 조회 시 기응시자 여부를 확인하는 과정에서 API 요청이 30초 이상 Pending 되는 경우가 발생했습니다. 이로 인해 메인 스레드가 블로킹되며 UI가 프리징되는 심각한 문제로 이어졌습니다.",
          solution: "Web Worker를 도입하여 기응시자 포함 공고 조회 API 요청을 백그라운드 스레드에서 처리하도록 변경했습니다. 메인 스레드와 Worker 간 postMessage / onmessage 비동기 통신을 구현하고, API 호출 대기 시간 동안 Skeleton UI를 적용했습니다.",
          result: "공고 조회 시 UI 프리징 문제가 해소되어, 운영팀이 다른 작업을 동시에 원활하게 수행할 수 있게 되었습니다. 시스템 응답성이 개선되어 운영팀의 업무 효율성이 눈에 띄게 향상되었습니다.",
          learning: "Web Worker와 같은 브라우저 제공 기능을 활용하면 사용자 경험(UX)과 업무 효율성을 동시에 개선할 수 있음을 배웠습니다. 단순히 기능 구현을 넘어서, 성능과 운영 환경을 함께 고려하는 접근이 필요하다는 점을 깨달았습니다.",
          image: acgTs1
        },
        {
          title: "재귀 기반 검사 결과 레포트 다운로드 Progress Bar 구현",
          problem: "검사 결과 레포트 다운로드 시 진행률을 파악할 수 없어 대기 시간이 길게 느껴지는 문제가 있었습니다. HTML, PDF로 구성된 압축파일 다운로드에 약 5분(10명 기준)이 소요되면서 사용자 불편이 발생했습니다.",
          solution: "Back-End 요구사항에 맞춰 재귀 기반 Progress Bar를 구현했습니다. 동적 총 페이지 수 확인 및 프로그레스바 초기화, 재귀 호출마다 실시간 진행률 계산 및 UI 업데이트, API 에러 발생 시 재시도 메커니즘 적용, 완료 후 다운로드 링크 자동 생성을 구현했습니다.",
          result: "총 페이지 수를 알 수 없는 상황에서도 효율적인 데이터 처리 구조를 마련했습니다. 명확한 진행률 표시로 사용자 체감 대기 시간을 단축시켰습니다.",
          learning: "재귀 호출 기반 로직을 UI/UX에 접목시켜 사용자 경험을 개선할 수 있음을 깨달았습니다. 사용자에게 제공되는 정보(진행률, 상태 표시)가 업무 효율성과 만족도에 큰 영향을 준다는 점을 배웠습니다.",
          image: acgTs2
        },
        {
          title: "Intersection Observer API 기반 Infinite Scroll 구현",
          problem: "응시자-감독 간 실시간 채팅에서 대량의 메시지 데이터 로딩으로 인해 약 3초간 UI가 프리징되는 문제가 있었습니다. 이는 메인 스레드가 한 번에 많은 데이터를 처리하면서 발생한 UI 블로킹 현상이었습니다.",
          solution: "UI 성능 최적화를 위해 react-intersection-observer와 React Query의 useInfiniteQuery를 도입했습니다. useInfiniteScrollQuery 커스텀 훅으로 20개 단위 점진적 로딩, getNextPageParam 기반의 자동 페이지네이션 제어, useMemo / useCallback을 활용한 불필요한 리렌더링 최소화, 스켈레톤 UI로 로딩 구간에서 사용자 경험 개선을 적용했습니다.",
          result: "초기 렌더링 시간을 3초 → 0.1초로 97% 단축했습니다.",
          learning: "기존 스크롤 이벤트 기반 방식은 메인 스레드를 블로킹할 수 있음을 확인했습니다. 반면 Intersection Observer는 비동기적으로 동작해 렌더링 성능에 미치는 영향을 최소화할 수 있다는 점을 배웠습니다.",
          image: acgTs3
        }
      ]
    }
  },
  {
    title: "이커머스 플랫폼",
    description:
      "사용자 친화적인 쇼핑 경험을 제공하는 풀스택 이커머스 웹사이트입니다. 장바구니, 결제, 주문 관리 등의 핵심 기능을 구현했으며, 반응형 디자인과 성능 최적화에 중점을 두었습니다.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "#",
    demo: "#",
    index: 2,
    company: "Personal",
    period: "2023.06 - 2023.09",
  },
  {
    title: "날씨 대시보드",
    description:
      "실시간 날씨 정보와 7일 예보를 제공하는 반응형 웹 애플리케이션입니다. OpenWeather API를 활용했으며, Chart.js로 데이터 시각화를 구현했습니다.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "API", "Chart.js"],
    github: "#",
    demo: "#",
    index: 3,
    company: "Personal",
    period: "2023.03 - 2023.04",
  },
  {
    title: "포트폴리오 빌더",
    description:
      "개발자들이 쉽게 포트폴리오를 만들 수 있는 드래그 앤 드롭 기반 웹 빌더입니다. 직관적인 인터페이스로 누구나 손쉽게 전문적인 포트폴리오를 제작할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
    tags: ["Next.js", "React DnD", "Tailwind CSS"],
    github: "#",
    demo: "#",
    index: 4,
    company: "Freelance",
    period: "2022.11 - 2022.12",
  },
  {
    title: "태스크 관리 앱",
    description: "팀 협업을 위한 칸반 보드 스타일의 태스크 관리 애플리케이션입니다. 드래그 앤 드롭으로 직관적인 UX를 제공하며, 실시간 동기화를 지원합니다.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["React", "Firebase", "Framer Motion"],
    github: "#",
    demo: "#",
    index: 5,
    company: "Personal",
    period: "2022.08 - 2022.10",
  },
  {
    title: "소셜 미디어 분석 도구",
    description: "다양한 소셜 미디어 플랫폼의 데이터를 수집하고 분석하는 대시보드입니다. 실시간 트렌드 분석과 인사이트 리포트를 제공합니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    index: 6,
    company: "Startup X",
    period: "2022.03 - 2022.07",
  },
  {
    title: "실시간 채팅 애플리케이션",
    description: "WebSocket 기반의 실시간 채팅 플랫폼입니다. 그룹 채팅, 파일 공유, 이모지 반응 등 다양한 기능을 지원합니다.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    tags: ["React", "Socket.io", "Express", "Redis"],
    github: "#",
    demo: "#",
    index: 7,
    company: "Personal",
    period: "2021.12 - 2022.02",
  },
  {
    title: "AI 이미지 갤러리",
    description: "AI 기반 이미지 검색과 자동 태깅 기능을 갖춘 갤러리 애플리케이션입니다. 머신러닝을 활용한 스마트 검색을 제공합니다.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    tags: ["Next.js", "TensorFlow.js", "AWS S3"],
    github: "#",
    demo: "#",
    index: 8,
    company: "Freelance",
    period: "2021.09 - 2021.11",
  },
  {
    title: "음악 스트리밍 플랫폼",
    description: "반응형 디자인과 직관적인 UI로 최적화된 음악 스트리밍 서비스입니다. 플레이리스트 생성, 추천 알고리즘 등을 구현했습니다.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    tags: ["React", "Redux", "Web Audio API", "Spotify API"],
    github: "#",
    demo: "#",
    index: 9,
    company: "Personal",
    period: "2021.06 - 2021.08",
  },
];
