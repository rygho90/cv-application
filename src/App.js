import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import General from "./components/General";

class App extends Component {
  constructor() {
    super();

    this.state = {
      visible: "Home",
      fname: 'Ryan',
      lname: '',
      phone: '',
      email: ''
    };

    this.switchScreen = this.switchScreen.bind(this);
  }

  switchScreen(screen) {
    this.setState({
      visible: screen
    })
  }

  render() {
    return (
      <div className="main-container">
        <div className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-item selected-item">Home</div>
          </div>
          <div className="sidebar-box">
            <div className="sidebar-item">General Information</div>
          </div>
          <div className="sidebar-box">
            <div className="sidebar-item">Education</div>
          </div>
          <div className="sidebar-box">
            <div className="sidebar-item">Work Experience</div>
          </div>
          <div className="sidebar-box">
            <div className="sidebar-item">Skills</div>
          </div>
        </div>

        <div className="content-container">
          <Home visible={this.state.visible} onSwitch={this.switchScreen} />
          <General visible={this.state.visible} onSwitch={this.switchScreen} fname={this.state.fname}/>
        </div>
      </div>
    );
  }
}

export default App;
