import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible !== 'Home') return null;
    return <div>Home</div>;
  }
}
