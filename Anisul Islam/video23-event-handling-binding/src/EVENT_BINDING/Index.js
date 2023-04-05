import React, { Component } from "react";

export default class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={this.handleChange}
          disabled={this.state.count === 5 ? true : false}
        >
          Increse
        </button>
      </div>
    );
  }
}
