import React, { Component } from "react";
import ListCollumns from "./ListCollumns";
import ApplicationList from "./ApplicationList";
import ButtonWrapper from "./../Button";

export default class List extends Component {
  render() {
    return (
      <div>
        <h1 className="list-head">students applications list</h1>
        <ListCollumns />
        <ApplicationList
          applications={this.props.applications}
          handleDelete={this.props.handleDelete}
        />
        <ButtonWrapper onClick={this.props.handleDisplay}>
          application form
        </ButtonWrapper>
      </div>
    );
  }
}
