import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {};
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
          <h1>Lorem ipsum dolor sit amet.</h1>

          <div>
            <form onSubmit={this.onSubmitGeneral}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstNameInput"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
