import React, { Component } from "react";
import "./Screens.css";

export default class General extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.inProgress = this.inProgress.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      activeFname: this.props.fname,
      activeLname: '',
      activePhone: '',
      activeEmail: ''
    };
  }

  handleSwitch(e) {
    e.preventDefault();
    this.props.onSwitch("Home");
  }

  inProgress(e) {
    e.preventDefault();
    console.log("This button does not work yet...");
  }

  handleInput(e) {
    this.setState({
      activeFname: e.target.value
    });
    console.log(this.state.activeFname)
  }

  render() {
    if (this.props.visible !== "General") return null;
    return (
      <div>
        <div className="screen-title">General Information</div>
        <form className="general-form">
          <div className="screen-row">
            <div className="screen-item">
              <label htmlFor="fname">First Name:</label>
              <br />
              <input
                type="text"
                id="fname"
                value={this.state.activeFname}
                onChange={this.handleInput}
              ></input>
              <br />
            </div>
            <div className="screen-item">
              <label htmlFor="lname">Last Name:</label>
              <br />
              <input type="text" id="lname"></input>
              <br />
            </div>
          </div>

          <div className="screen-row">
            <div className="screen-item">
              <label htmlFor="email">Email:</label>
              <br />
              <input type="text" id="email"></input>
              <br />
            </div>
            <div className="screen-item">
              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input type="text" id="phone"></input>
              <br />
            </div>
          </div>

          <div className="screen-row button-row">
            <button onClick={this.handleSwitch}>Previous</button>
            <button onClick={this.inProgress}>Save Information</button>
            <button onClick={this.inProgress}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}
