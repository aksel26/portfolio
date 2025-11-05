# 프론트엔드 개발자 포트폴리오

미니멀하고 깔끔한 디자인의 프론트엔드 개발자 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- 🎨 **완전한 반응형 디자인** - 모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동
- 🌓 **다크모드/라이트모드** - 토글 버튼으로 쉽게 전환, localStorage에 선택 저장
- ⚡ **부드러운 애니메이션** - Framer Motion을 활용한 세련된 페이지 전환 및 스크롤 효과
- 📊 **스크롤 진행바** - 페이지 읽기 진행도를 시각적으로 표시
- 🎯 **프로젝트 필터링** - 카테고리별로 프로젝트를 쉽게 필터링
- 📱 **접근성** - 시맨틱 HTML과 ARIA 레이블 적용

## 🛠️ 기술 스택

- **프레임워크**: React 18
- **빌드 도구**: Vite 5
- **스타일링**: Tailwind CSS v4.1
- **애니메이션**: Framer Motion 11
- **폰트**: Pretendard (한글 최적화)

## 📂 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Header.jsx     # 네비게이션 헤더
│   │   ├── Footer.jsx     # 푸터
│   │   └── ScrollProgress.jsx  # 스크롤 진행바
│   ├── sections/          # 페이지 섹션 컴포넌트
│   │   ├── Hero.jsx       # 메인 히어로 섹션
│   │   ├── About.jsx      # 소개 섹션
│   │   ├── Projects.jsx   # 프로젝트 섹션
│   │   ├── Experience.jsx # 경력 타임라인
│   │   └── Contact.jsx    # 연락처 섹션
│   ├── context/           # React Context
│   │   └── ThemeContext.jsx  # 테마 관리
│   ├── App.jsx           # 메인 App 컴포넌트
│   ├── main.jsx          # 엔트리 포인트
│   └── index.css         # 글로벌 스타일
├── index.html            # HTML 템플릿
├── vite.config.js        # Vite 설정
└── package.json          # 프로젝트 의존성

```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 [http://localhost:5173](http://localhost:5173)에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
```

## 📋 포함된 섹션

1. **Hero Section** - 메인 소개 영역, CTA 버튼, 스크롤 다운 인디케이터
2. **About Section** - 자기소개, 기술 스택 뱃지
3. **Projects Section** - 프로젝트 카드 그리드, 카테고리 필터링
4. **Experience Section** - 경력 타임라인
5. **Contact Section** - 연락처 정보, 소셜 링크

## 🎨 디자인 특징

- **미니멀 디자인**: 깔끔하고 여백을 활용한 심플한 레이아웃
- **타이포그래피**: 명확한 계층 구조와 가독성 최적화
- **색상**: 화이트/다크 기반의 절제된 컬러 팔레트
- **애니메이션**:
  - Fade-in, Slide-up 스크롤 효과
  - 호버 시 카드 lift 효과
  - Stagger 애니메이션
  - 부드러운 다크모드 전환

## ✏️ 커스터마이징

### 개인 정보 수정

각 섹션 컴포넌트의 데이터 배열을 수정하여 개인 정보를 업데이트하세요:

- `src/sections/Hero.jsx` - 이름, 소개
- `src/sections/About.jsx` - 자기소개, 기술 스택
- `src/sections/Projects.jsx` - 프로젝트 정보
- `src/sections/Experience.jsx` - 경력 사항
- `src/sections/Contact.jsx` - 연락처 정보

### 색상 변경

`tailwind.config.js`에서 색상 팔레트를 커스터마이징할 수 있습니다.

## 📝 라이선스

개인 및 상업적 용도로 자유롭게 사용 가능합니다.

## 🤝 기여

이슈와 풀 리퀘스트는 언제나 환영합니다!
