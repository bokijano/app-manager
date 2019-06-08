import React, { Component } from "react";
import AplicationForm from "./AplicationForm";
import List from "./Application List/List";

export default class Aplication extends Component {
  state = {
    emptyApplication: [],
    displayForm: true
  };
  addApplication = app => {
    app.id = Math.random();
    let emptyApplication = [...this.state.emptyApplication, app];
    this.setState({
      emptyApplication: emptyApplication,
      displayForm: false
    });
  };

  handleDisplay = () => {
    this.setState({
      displayForm: true
    });
  };

  render() {
    return (
      <div>
        {this.state.displayForm ? null : (
          <List
            emptyApplication={this.state.emptyApplication}
            displayForm={this.state.displayForm}
            handleDisplay={this.handleDisplay}
          />
        )}

        <AplicationForm
          emptyApplication={this.state.emptyApplication}
          addApplication={this.addApplication}
          displayForm={this.state.displayForm}
        />
      </div>
    );
  }
}
