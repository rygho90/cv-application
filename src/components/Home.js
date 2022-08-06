import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.props.onSwitch('General')
  }

  render() {
    if (this.props.visible !== "Home") return null;
    return (
      <div>
        <div>Home</div>
        <button onClick={this.handleSwitch}>General Info</button>
      </div>
    );
  }
}
