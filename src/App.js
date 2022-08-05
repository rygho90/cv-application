import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import General from "./components/General";

class App extends Component {
  constructor() {
    super();

    this.state = {
      visible: "Home",
    };
  }

  render() {
    return (
      <div class="main-container">
        <div class="sidebar">
          <div class="sidebar-box">
            <div class="sidebar-item selected-item">Home</div>
          </div>
          <div class="sidebar-box">
            <div class="sidebar-item">General Information</div>
          </div>
          <div class="sidebar-box">
            <div class="sidebar-item">Education</div>
          </div>
          <div class="sidebar-box">
            <div class="sidebar-item">Work Experience</div>
          </div>
          <div class="sidebar-box">
            <div class="sidebar-item">Skills</div>
          </div>
        </div>

        <div class="content-container">
          <Home visible={this.state.visible} />
          <General visible={this.state.visible} />
        </div>
      </div>
    );
  }
}

export default App;
