import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/Application List/List";
import AplicationForm from "./components/AplicationForm";
import ButtonWrapper from "./components/Button";
import Navbar from "./Navbar";
import applications from "./studentsData";
import MoreInfo from "./components/More Info/MoreInfo";
import Update from "./components/Update/Update";

class App extends Component {
  state = {
    applyDisplay: true,
    displayUsername: false,
    applications: applications,
    displayForm: true,
    infoOpen: false,
    infoApp: [],
    updateOpen: false,
    updateApp: []
  };
  // add application to the list
  addApplication = app => {
    app.id = Math.random();
    let applications = [...this.state.applications, app];
    this.setState({
      applications: applications,
      displayForm: false
    });
  };

  // display form
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

  // delete application from the list
  handleDelete = id => {
    let removeItem = this.state.applications.filter(item => {
      return item.id !== id;
    });
    this.setState({
      applications: removeItem
    });
  };

  // open/close info about application
  openInfo = id => {
    const application = this.state.applications.find(app => app.id === id);
    this.setState({
      infoApp: application,
      infoOpen: true
    });
  };
  closeInfo = () => {
    this.setState({
      infoOpen: false
    });
  };

  // update application / change data
  updateApp = id => {
    const application = this.state.applications.find(app => app.id === id);
    this.setState({
      updateApp: application,
      updateOpen: true
    });
  };
  closeUpdate = (id, newApp) => {
    const application = this.state.applications.filter(app => app.id !== id);
    console.log(application);
    newApp.id = Math.random();
    let applications = [...application, newApp];
    console.log(applications);
    this.setState({
      updateOpen: false,
      applications: applications
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
            handleChange={this.handleChange}
          />
        )}
        <div style={{ marginTop: "100px" }}>
          {this.state.displayForm ? null : (
            <List
              applications={this.state.applications}
              displayForm={this.state.displayForm}
              handleDisplay={this.handleDisplay}
              handleDelete={this.handleDelete}
              openInfo={this.openInfo}
              updateApp={this.updateApp}
            />
          )}
        </div>
        {this.state.infoOpen ? (
          <MoreInfo infoApp={this.state.infoApp} closeInfo={this.closeInfo} />
        ) : null}
        {this.state.updateOpen ? (
          <Update
            updateApp={this.state.updateApp}
            handleChange={this.handleChange}
            closeUpdate={this.closeUpdate}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
