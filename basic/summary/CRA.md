CRA 정리
=====================

# CRA (create-react-app)
- node.js 설치 필수
- `npx create-react-app '폴더이름'`을 터미널에 입력하여 설치한다



# CSS 관련
- CSS 파일에서 코드를 작성하고 import하면 자바스크립트 객체로 변환을 해준다.

```jsx
import styles from '경로'
```
```jsx
<Button style = {styles.btn}/>
```

- 해당 css 코드에서 지정한 클래스명을 가지고 스타일링을 할 수 있다.
- html코드를 확인해보면 해당 컴포넌트에 클래스명이 무작위로 붙는다. 따라서 각각의 클래스명을 기억해서 스타일링을 할 필요가 없어진다.

