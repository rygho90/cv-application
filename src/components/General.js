import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible !== 'General') return null;
    return <div>General Information</div>;
  }
}
