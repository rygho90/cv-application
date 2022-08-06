import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.props.onSwitch('Home')
  }

  render() {
    if (this.props.visible !== 'General') return null;
    return (
      <div>
        <div>General Information</div>
        <button onClick={this.handleSwitch}>Home</button>
      </div>
    );
  }
}
