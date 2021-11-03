import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();
  // 비구조화 할당을 통해 값 추출.
  const { name, nickname } = inputs; 

  const onChange = e => {
    // 우선 e.target 에서 name 과 value 를 추출
    console.log(e.target);
    const { value, name } = e.target; 
    setInputs({
      ...inputs, // spread 문법을 사용하여 기존의 input 객체를 복사한 뒤
      [name]: value // [] 안의 값을 키로 잡겠다. name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      {/* 리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야 합니다. */}
      {/* onClick={onChangeName()} 과 같이 선언 시 클릭이 아닌 렌더링 시점에서 호출된다. */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        ref={nameInput}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;