import React,{ useState } from "react";
import Counter from './Counter';
import Info from "./Info";
import ContextSample from './ContextSample';
import CounterUseState from "./CounterUseState";
import InfoUseEffect from "./InfoUseEffect"
import InputSample from "./InputSample";

const App = () => {

  return <InputSample />;
  //  <div>
  //    <button
  //      onClick={() => {
  //        setVisible(!visible);
  //      }}
  //    >
  //      {visible ? "숨기기" : "보이기"}
  //    </button>
  //    <hr />
  //    {visible && <Info />}
  //  </div>;
};

export default App;
