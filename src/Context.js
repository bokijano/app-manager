import React, { Component } from "react";

const ApplicationContext = React.createContext();

class ApplicationProvider extends Component {
  state = {
    emptyApplication: []
  };
  componentDidMount() {
    this.setApplication();
  }

  setApplication = () => {
    let emptyApp = [];
    {
      this.state.emptyApplication.forEach((item, app) => {
        app.id = Math.random();
        let singleApp = { ...item, app };
        emptyApp = [...emptyApp, singleApp];
      });
    }
    this.setState({
      emptyApplication: emptyApp
    });
  };

  render() {
    console.log(this.state.emptyApplication)  
    return (
      <ApplicationContext.Provider
        value={{
          ...this.state
        }}
      >
        <p>context</p>
      </ApplicationContext.Provider>
    );
  }
}

const ApplicationConsumer = ApplicationContext.Consumer;

export { ApplicationConsumer, ApplicationProvider };
