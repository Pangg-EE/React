//최초에 react, react-dom 모듈을 로드하고 있으며 React의 본체다.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// 처음 시작 .
// Node.js 버전을 확인 후,
// 1. npm install -g create-react-app
// 2. create-react-app- "프로젝트명"

// ReactDOM.render(첫번째인수, 두번째인수)
// 첫번째  인수는 App.js 로 정의하고있는 App 컴포넌트 지정. 
// 두번째 인수는 root 라는 id의 요소  지정
// 즉 , App 컴포넌트가 root 태그에 포함딘 코드 렌더링 된 후 출력 => 살짝 뜻이  헷갈림...
ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
