import React, { Component } from "react";
import Header from "./Header";
import UserInput from "./UserInput";
import Preview from "./Preview";

export default class App extends Component {
  constructor() {
    super();
    this.state = { userInfo: null };
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  setUserInfo(info) {
    this.setState({ userInfo: info });
  }

  render() {
    return (
      <main>
        <Header />
        <UserInput setUserInfo={this.setUserInfo} />
        <Preview userInfo={this.state.userInfo} />
      </main>
    );
  }
}
