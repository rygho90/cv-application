import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.props.onSwitch("Home");
  }

  render() {
    if (this.props.visible !== "General") return null;
    return (
      <div>
        <div>General Information</div>
        <form className="general-form">
          <label for="fname">First Name:</label><br />
          <input type="text" id="fname"></input><br />
          <label for="lname">Last Name:</label><br />
          <input type="text" id="lname"></input><br />
          <label for="email">Email:</label><br />
          <input type="text" id="email"></input><br />
          <label for="phone">Phone Number:</label><br />
          <input type="text" id="phone"></input><br />
          <button>Save and Continue</button>
        </form>
        <button onClick={this.handleSwitch}>Home</button>
      </div>
    );
  }
}
