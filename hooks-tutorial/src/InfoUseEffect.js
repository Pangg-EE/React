import React, { useState, useEffect } from "react";

const InfoUseEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    // console.log("렌더링이 완료되었습니다!");
    // console.log("마운트 될때만 최초 렌더링에 실행됩니다!");
    console.log("특정 값이 변경되어 실행됩니다! 변경값:" +nickname );
  },[nickname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5rem",
        width: "100%",
      }}
    >

      {/* 리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야 합니다. */}
      {/* onClick={onChangeName()} 과 같이 선언 시 클릭이 아닌 렌더링 시점에서 호출된다. */}
      <div style={{ width: "400px", height: "100px", margin: "0 auto" }}>
        <input
          style={{
            width: "50%",
            height: "100%",
            fontSize: "30px",
            boxSizing: "border-box",
            float: "left",
          }}
          value={name}
          onChange={onChangeName}
        />
        <input
          style={{
            width: "50%",
            height: "100%",
            fontSize: "30px",
            boxSizing: "border-box",
            float: "left",
          }}
          value={nickname}
          onChange={onChangeNickname}
        />
      </div>

      <div
        style={{
          width: "400px",
          height: "100px",
          margin: "5rem auto",
          fontSize: "25px",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            fontSize: "30px",
            boxSizing: "border-box",
            float: "left",
          }}
        >
          <b>이름:</b>
          {name}
        </div>

        <div
          style={{
            width: "50%",
            height: "100%",
            fontSize: "30px",
            boxSizing: "border-box",
            float: "left",
          }}
        >
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoUseEffect;
