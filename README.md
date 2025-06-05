# React Arin Gallery

![React](https://img.shields.io/badge/React-16.13.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?logo=node.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React-Arin-Gallery는 React로 제작된 반응형 이미지 갤러리 애플리케이션입니다. 사용자 친화적인 인터페이스와 부드러운 이미지 로딩 경험을 제공합니다.

## ✨ 주요 기능

- 반응형 그리드 레이아웃
- 이미지 지연 로딩(Lazy Loading)
- 무한 스크롤
- 이미지 확대/축소 및 상세 보기
- GitHub Pages를 통한 손쉬운 배포

## 🚀 설치 및 실행

### 사전 요구 사항

- Node.js (v14 이상)
- npm 또는 Yarn

### 설치 방법

1. 저장소 클론하기:
   ```bash
   git clone https://github.com/your-username/React-Arin-Gallery.git
   cd React-Arin-Gallery
   ```

2. 의존성 설치:
   ```bash
   # 루트 디렉토리에서
   npm install
   
   # 클라이언트 디렉토리로 이동하여
   cd client
   npm install
   ```

### 개발 서버 실행

```bash
# 루트 디렉토리에서
npm run dev
```

이 명령어는 클라이언트와 서버를 동시에 실행합니다.

## 🛠 기술 스택

- **프론트엔드**:
  - React 16.13.1
  - React Masonry CSS
  - React Photo Gallery
  - Axios

- **백엔드**:
  - Node.js
  - Express
  - MySQL

- **배포**:
  - GitHub Pages
  - gh-pages

## 📂 디렉토리 구조

```
React-Arin-Gallery/
├── client/                 # 프론트엔드 소스 코드
│   ├── public/             # 정적 파일
│   └── src/                # React 소스 코드
│       ├── components/      # 재사용 가능한 컴포넌트
│       ├── App.js           # 메인 앱 컴포넌트
│       └── index.js         # 진입점
├── server/                  # 백엔드 소스 코드
│   ├── routes/             # API 라우트
│   └── server.js           # 서버 진입점
├── package.json            # 루트 패키지 설정
└── README.md               # 이 파일
```

## 🌐 배포하기

GitHub Pages에 배포하려면 다음 명령어를 실행하세요:

```bash
# 클라이언트 디렉토리에서
npm run deploy
```

## 🤝 기여하기

기여를 환영합니다! 버그 제보, 기능 요청, 풀 리퀘스트는 언제든지 환영합니다.

1. 이 저장소를 포크하세요.
2. 새로운 브랜치를 만드세요: `git checkout -b feature/amazing-feature`
3. 변경사항을 커밋하세요: `git commit -m 'Add some amazing feature'`
4. 브랜치에 푸시하세요: `git push origin feature/amazing-feature`
5. 풀 리퀘스트를 오픈하세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

<p align="center">
  <em>Powered by Cascade</em>
</p>
