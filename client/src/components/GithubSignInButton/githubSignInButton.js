import React, { Component } from "react";

class GithubSignInButton extends Component {
   
  render() {
    return (
        <button onClick={this.signWithgithub}>Sign in with github</button> 
    );
  }
}

export default GithubSignInButton;