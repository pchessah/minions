import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), name: "Chessah" };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      name: "Paul"
    });
  }

  render() {
    return (
      <div>
        <h3>Hello {this.state.name}</h3>
        <h4> The date is {this.state.date.toLocaleDateString()}. </h4>
      </div>
    );
  }
}

export default State;
