import React, { Component } from "react";
import "./Screens.css";

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
        <div className="screen-title">General Information</div>
        <form className="general-form">
          <div className="screen-row">
            <div className="screen-item">
              <label for="fname">First Name:</label>
              <br />
              <input type="text" id="fname"></input>
              <br />
            </div>
            <div className="screen-item">
              <label for="lname">Last Name:</label>
              <br />
              <input type="text" id="lname"></input>
              <br />
            </div>
          </div>

          <div className="screen-row">
            <div className="screen-item">
              <label for="email">Email:</label>
              <br />
              <input type="text" id="email"></input>
              <br />
            </div>
            <div className="screen-item">
              <label for="phone">Phone Number:</label>
              <br />
              <input type="text" id="phone"></input>
              <br />
            </div>
          </div>

          <div className="screen-row button-row">
            <button onClick={this.handleSwitch}>Previous</button>
            <button>Save Information</button>
            <button>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
