import React, { Component } from "react";

export default class UserInput extends Component {
  constructor() {
    super();
    this.timer = null;
    this.inputValueChanged = this.inputValueChanged.bind(this);
  }

  inputValueChanged(e) {
    e.persist();
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      fetch(`https://api.github.com/users/${e.target.value}`)
        .then(response => response.json())
        .then(response => {
          this.props.setUserInfo(response);
        });
    }, 500);
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.inputValueChanged}
        placeholder="please enter user name"
      />
    );
  }
}
