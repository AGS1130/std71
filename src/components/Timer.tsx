import React, { Component } from "react";

class Timer extends Component {
  state = { count: 0 };
  timer = {};

  updateTimer = () => {
    this.setState({
      count: this.state.count += 1
    });
  };

  componentDidMount = () => {
    this.timer = setInterval(this.updateTimer, 1000);
  };

  render = () => {
    return (
      <div>
        <h2>Seconds so Far:</h2>
        <p>{this.state.count}</p>
      </div>
    );
  };
}

export default Timer;
