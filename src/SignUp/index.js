import React, { Component } from "react";
import SignUpView from "./signUpView";
import { withRouter } from "react-router";
import app from "../base";

class SignUpContainer extends Component {
  handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);

      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
