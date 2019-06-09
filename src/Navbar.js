import React, { Component } from "react";
import ButtonWrapper from "./components/Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 fixed-top">
        <ButtonWrapper
          onClick={this.props.handleDisplay}
          style={{
            width: "40%",
            marginLeft: "55%",
            marginRight: "5px",
            color: "blue",
            borderColor: "blue"
          }}
        >
          Students applications
        </ButtonWrapper>
      </nav>
    );
  }
}
