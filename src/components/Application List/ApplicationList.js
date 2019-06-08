import React, { Component } from "react";

export default class ApplicationList extends Component {
  render() {
    const {
      id,
      name,
      email,
      age,
      phoneNumber,
      communication,
      englishLevel,
      dateToStart,
      skills,
      presentation,
      homeStudy
    } = this.props.application;
    console.log(this.props.application);
    return (
      <React.Fragment>
        {this.props.application.map(item => (
          <div key={item.id} className="container-fluid">
            <div className="row my-3 text-capitalize text-center">
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">
                  {item.name} {item.age} years
                </p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">{item.phoneNumber}</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">{item.email}</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">
                  <button>more info</button>
                </p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">
                  <button>update</button>
                </p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="list-paragraph">
                  <button>delete</button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
