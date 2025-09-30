# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Git

Git 설정하고 초기화하기

1. git init (git 초기화)
2. git config --list (git 환경설정)
   환경설정에 나와있는 user.name, user.email을 주시
   현재 사용하고 있는 github 계정과 같은지 확인해봐야함.
3. git config --local user.name "git 계정"
4. git config --local user.email "git 이메일"

git push 5. git add . / git add -A : git ignore를 제외한 모든 파일을 Staging Area로 올림
git 구성 영역

- Working Directory (작업 디렉토리)
  파일은 수정되었지만, git add를 하지 않아서 스테이징 영역에는 없는 상태를 의미.
  실제로 파일을 수정하는 곳
- Staging Area (스테이징 영역, 인덱스)
  commit할 변경사항을 잠시 올려두는 대기 공간.
  git add 명령어로 스테이징 영역에 파일을 옮길 수 있다.
  - Repository (저장소, .git)
    최종적으로 git commit 시, 스테이징 영역에 있는 파일(폴더)가 git에 기록
    commit 키워드
    - feat: 새로운 기능 추가
    - fit: 버그 수정
    - docs: 문서 수정
    - style: 코드 스타일 변경(추가)
    - refactor: 리펙토링
    - test: 테스트 코드 추가
    - chore: 빌드 설정 변경
      예시: git commit -m "fix: 로그인 시 빈 값을 입력해도 로그인 되던 현상 수정"

6. git config --global core.editor "code --wait"  
   모든 입력값이 새로운 창으로 나옴
   취소: git config --global --unset core.editor 7.

7. commit 확인하기

- git status
- git log (--oneline / --graph --oneline)

8. commit 취소 (Repository -> working directory / staging area)

- commit 1개 이하: 그냥 git 초기화를 해라
- commit 2개 이상: git reset HEAD~숫자 (숫자만큼의 commit을 되돌리겠다)
  HEAD앞에 오는 옵션

  - --mixed: 기본값, 커밋 취소 + 작업 내역 Working Directory 영역에 배치
  - --soft: 커밋 취소 + 작업 내역 staging area 영역에 배치
  - --hard: 커밋 취소 + 작업 내역 삭제

  만약에 소스코드가 github 올라갔으면 reset 하면 안됨!!!!!!!!!

  - git revert 커밋아이디 : 작업 내역을 삭제한 내용을 새롭게 commit
  - 가장 많이 하는 실수: github에 올라갔는데 git reset을 하고 git push --force
  - 작업 내역을 취소한 새로운 커밋을 올렸으니 병합해서 사용하세요~

9. github에 소스를 올릴 때

   1. git push -u origin 브랜치명

10. git == github와 같다

- github 올라가면 git으로 관리되지 않는 것
- github 원격 저장소
- git 로컬 저장소

```

```
