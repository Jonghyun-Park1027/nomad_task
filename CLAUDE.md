# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
이 프로젝트는 React Router v7과 TypeScript로 구축된 사주AI 웹 애플리케이션입니다. 사주, 만세력 계산, AI 상담 기능을 제공하는 한국 전통 사상 기반의 서비스입니다.

## Technology Stack
- **Framework**: React Router v7 (SSR 지원)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Shadcn UI (new-york style)
- **UI Components**: Radix UI (via Shadcn)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Dev Server**: React Router dev server

## Development Commands
```bash
# 개발 서버 시작 (HMR 포함)
npm run dev

# 프로덕션 빌드
npm run build

# 타입 체크 및 타입 생성
npm run typecheck

# 프로덕션 서버 실행
npm run start
```

## Architecture & File Structure

### Route System
- `app/routes.ts`: 모든 라우트 정의 (React Router v7 방식)
- `app/common/pages/`: 페이지 컴포넌트들
- Routes는 file-based routing이 아닌 config-based routing 사용

### Component Architecture
```
app/
├── common/
│   ├── components/
│   │   ├── navigation.tsx     # 메인 네비게이션 (사주AI 브랜딩)
│   │   └── ui/                # Shadcn UI 컴포넌트들
│   └── pages/
│       ├── home-page.tsx      # 홈페이지
│       └── color-test.tsx     # 컬러 테스트 페이지
├── features/                  # 기능별 모듈 (확장 예정)
├── lib/
│   └── utils.ts              # cn() 유틸리티 함수
└── root.tsx                  # 루트 레이아웃
```

### UI System
- **Shadcn UI**: `~/common/components/ui/`에 위치
- **스타일**: new-york 스타일, neutral 베이스 컬러
- **다크모드**: 기본 활성화 (`dark` 클래스)
- **TypeScript**: 모든 컴포넌트에서 strict typing

## Key Development Rules

### React Router v7 Conventions
1. **Route Types**: `import type { Route } from "./+types/[filename]";`
2. **No useLoaderData/useActionData**: 컴포넌트는 `Route.ComponentProps`로 데이터 받음
3. **Plain Object Returns**: `json()` 대신 일반 객체 반환
4. **Required Exports**: 모든 페이지에서 `loader`, `action`, `meta` 함수 export 필수

### UI Development Guidelines
1. **Radix 직접 임포트 금지**: 항상 Shadcn UI에서 임포트
2. **Remix 임포트 금지**: `@remix-run` → `react-router`로 변경
3. **컴포넌트 구조**: exported component, subcomponents, helpers, static content, types 순서
4. **명명 규칙**: 디렉토리는 lowercase-dash, 컴포넌트는 named exports

### 사주AI 특화 규칙
1. **응답 언어**: 항상 한국어로 응답
2. **만세력 계산 로직**: 기존 계산 로직 수정 금지
3. **브랜딩**: "사주AI" 브랜드명 유지
4. **UI 제거 단어**: "천을귀인" 단어 모두 제거
5. **패키지 설치**: pip 대신 `uv add` 사용

## Navigation Structure
메인 네비게이션에서 다음 섹션들을 지원:
- **만세력**: 만세력 계산기, 나의 만세력
- **사주 상담**: AI 상담, 나의 상담 기록
- **사주 분석**: AI 분석, Top 분석, 나의 분석
- **IdeaGPT**: 아이디어 생성 도구
- **Teams**: 팀 관련 기능

## TypeScript Configuration
- **Strict typing** 활성화
- **Interface 선호**: type보다 interface 사용
- **Enum 금지**: map 사용 권장
- **Functional Components**: 클래스 컴포넌트 사용 금지

## The Golden Rule
1. When unsure about implementation details, ALWAYS ask the developer.
2. 입력 값을 통한 만세력 계산 로직은 수정하지 말 것
3. Always respond in 한국어
4. If installation is necessary, do not install using pip; ALWAYS use uv add instead.
