import React, { Component } from "react";
import ListCollumns from "./ListCollumns";
import ApplicationList from "./ApplicationList";
import ButtonWrapper from "./../Button";

export default class List extends Component {
  render() {
    {
      /*const { name, age, phoneNumber } = this.props.application;*/
    }
    console.log(this.props.emptyApplication);
    return (
      <div>
        <h1 className="list-head">students applications list</h1>
        <ListCollumns />
        <ApplicationList application={this.props.emptyApplication} />
        <ButtonWrapper onClick={this.props.handleDisplay}>
          back to application form
        </ButtonWrapper>
      </div>
    );
  }
}
