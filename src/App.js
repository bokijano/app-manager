import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aplication from "./components/Aplication";
import ApplicationList from "./components/Application List/ApplicationList";

class App extends Component {
  render() {
    return (
      <div>
        {/*<ApplicationList />*/}
        <Aplication />
      </div>
    );
  }
}

export default App;
