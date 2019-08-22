import React from "react";

import { LoginFormComponent } from "./LoginFormComponent";
import { requestLogin } from "./utils/requestLogin";

export class LoginFormContainer extends React.Component {
  defaultState = {
    isLoading: false,
    username: "",
    password: "",
    token: "",
    error: ""
  };

  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  handlePasswordChange = password => {
    this.setState({ error: this.defaultState.error, password });
  };
  handleUsernameChange = username => {
    this.setState({ error: this.defaultState.error, username });
  };

  handleSubmit = () => {
    this.setState({ isLoading: true }, () => {
      requestLogin(this.state.username, this.state.password).then(
        (token = "") =>
          this.setState({ ...this.defaultState }, () => {
            if (token !== "") {
              this.setState({ token });
            } else {
              this.setState({ error: "Error Logging In" });
            }
          })
      );
    });
  };

  render() {
    return (
      <div>
        {this.state.token === "" ? (
          <LoginFormComponent
            {...this.state}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <img
            src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
            alt="success gif"
          />
        )}
        <br />
        <hr />
        <h2 className="has-text-white">Debug</h2>
        <code style={{ marginTop: "500px" }}>{JSON.stringify(this.state)}</code>
        <br />
        <br />
        <button
          className="button"
          onClick={() => this.setState(this.defaultState)}
        >
          Reset Demo
        </button>
      </div>
    );
  }
}
