import React from "react";

class AppClass extends React.Component {
  state = {
    number: 0,
  };
  handleClickIncrement = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };
  handleClickDecrement = () => {
    this.setState((state) => ({
      number: state.number - 1,
    }));
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "100px" }}>{this.state.number}</div>
        <button
          style={{ fontSize: "30px" }}
          onClick={this.handleClickIncrement}
        > 더하기
        </button>
        <button
          style={{ fontSize: "30px" }}
          onClick={this.handleClickDecrement}
        > 빼기
        </button>
      </div>
    );
  }
}

export default AppClass;
