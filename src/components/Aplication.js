import React, { Component } from "react";
import AplicationForm from "./AplicationForm";
import ApplicationList from "./ApplicationList";

export default class Aplication extends Component {
  state = {
    emptyApplication: [],
    application: [
      {
        id: 1,
        name: "Bojan",
        email: "@gmail",
        age: 35,
        phoneNumber: 64,
        communication: "Email",
        englishLevel: "A1",
        dateToStart: 20,
        skills: "HTML",
        presentation: "better salary",
        homeStudy: true
      }
    ]
  };
  addApplication = app => {
    app.id = Math.random();
    let emptyApplication = [...this.state.emptyApplication, app];
    this.setState({
      emptyApplication: emptyApplication
    });
  };

  render() {
    return (
      <div>
        <ApplicationList />
        {/*<AplicationForm
          emptyApplication={this.state.emptyApplication}
          addApplication={this.addApplication}
        />*/}
      </div>
    );
  }
}
