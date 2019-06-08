import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/Application List/List";
import AplicationForm from "./components/AplicationForm";
import ButtonWrapper from "./components/Button";
import Navbar from "./Navbar";
import applications from "./studentsData";
import MoreInfo from "./components/More Info/MoreInfo";

class App extends Component {
  state = {
    applyDisplay: true,
    displayUsername: false,
    applications: applications,
    displayForm: true
  };
  addApplication = app => {
    app.id = Math.random();
    let applications = [...this.state.applications, app];
    this.setState({
      applications: applications,
      displayForm: false
    });
  };

  handleDisplay = () => {
    this.setState({
      displayForm: !this.state.displayForm,
      applyDisplay: false
    });
  };
  displayApplyForm = () => {
    this.setState({
      applyDisplay: false,
      displayForm: true
    });
  };
  handleDelete = id => {
    let removeItem = this.state.applications.filter(item => {
      return item.id !== id;
    });
    this.setState({
      applications: removeItem
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar handleDisplay={this.handleDisplay} />
        {this.state.applyDisplay ? (
          <ButtonWrapper
            style={{ marginTop: "150px" }}
            onClick={this.displayApplyForm}
          >
            Apply here
          </ButtonWrapper>
        ) : (
          <AplicationForm
            emptyApplication={this.state.emptyApplication}
            addApplication={this.addApplication}
            displayForm={this.state.displayForm}
          />
        )}
        <div style={{ marginTop: "100px" }}>
          {this.state.displayForm ? null : (
            <List
              applications={this.state.applications}
              displayForm={this.state.displayForm}
              handleDisplay={this.handleDisplay}
              handleDelete={this.handleDelete}
            />
          )}
        </div>
        <MoreInfo />
      </React.Fragment>
    );
  }
}

export default App;
