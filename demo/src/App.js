import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routers from './components/Router';

// class 형태로 Component 클래스를 상속하여 App 클래스를 생성하기도한다.
// 아래에서는 return 부분에 jsx  형태로 나타내준다.
function App() {


  return (
    <div className="App">
    
        <Routers />

    </div>
  );
}

export default App;
