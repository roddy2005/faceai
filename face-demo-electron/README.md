# FaceAPI Webcam Offline (Electron)

이 저장소는 `@vladmandic/face-api`의 웹캠 데모를 **오프라인**으로 실행할 수 있도록
Electron으로 포장하여 Windows `.exe`를 생성하는 템플릿입니다.

## 로컬 실행
```bash
npm install
npm run prepare-assets   # 모델 다운로드 + 라이브러리 복사
npm run start            # 개발 실행
```

## 빌드(.exe 생성)
```bash
npm run dist             # dist/ 에 NSIS 설치형 .exe 생성
```

## GitHub Actions로 빌드(권장)
1) 이 폴더 내용을 본인 GitHub 저장소에 올립니다.
2) GitHub → Actions → `build-windows-exe` 워크플로우를 수동 실행(workflow_dispatch).
3) 완료 후 `Artifacts`에서 설치 파일을 다운로드합니다.

## 개인정보
- 모든 처리는 로컬 장치에서 수행되며, 영상은 외부로 전송/저장되지 않습니다.
- 배포 전, 학교 규정과 보호자 동의 지침을 반드시 준수하세요.
