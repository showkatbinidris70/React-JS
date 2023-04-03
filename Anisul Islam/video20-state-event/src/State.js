import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
        count: this.state.count+1
    })
  };
  handleDeIncrement = () => {
    this.setState({
        count: this.state.count-1
    })
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>{this.props.count}</h2>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}  disabled={count===5 ? true : false}>+</button>
        <button onClick={this.handleDeIncrement} disabled={count===0 ? true : false}>-</button>
      </div>
    );
  }
}
