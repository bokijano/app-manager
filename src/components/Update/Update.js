import React, { Component } from "react";
import FormWrapperUpdate from "./FormWrapperUpdate";
import InfoContainer from "./../More Info/InfoContainer";
import ButtonWrapper from "./../Button.js";

export default class Update extends Component {
  state = {
    id: this.props.updateApp.id,
    name: this.props.updateApp.name,
    email: this.props.updateApp.email,
    age: this.props.updateApp.age,
    phoneNumber: this.props.updateApp.phoneNumber,
    communication: this.props.updateApp.communication,
    englishLevel: this.props.updateApp.englishLevel,
    dateToStart: this.props.updateApp.dateToStart,
    skills: this.props.updateApp.skills,
    presentation: this.props.updateApp.presentation,
    homeStudy: this.props.updateApp.homeStudy
  };
  handleChange = e => {
    const { type, checked, name, value } = e.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked,
          value: ""
        })
      : this.setState({
          [name]: value,
          value: ""
        });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.closeUpdate(this.state.id, this.state);
  };
  render() {
    return (
      <InfoContainer>
        <div id="info" className="col-11 mx-auto text-center p-4">
          <FormWrapperUpdate>
            <form className="form-update" onSubmit={this.handleSubmit}>
              {/* student name */}
              <div className="row">
                <label className="col-sm-3 small-device-label" htmlFor="name">
                  Full Name *
                </label>

                <input
                  onClick={this.deleteValue}
                  className="col-sm-9 small-device-input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* student Email */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Email *
                </label>
                <input
                  className="col-md-9 small-device-input"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* student age */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Age *
                </label>
                <input
                  className="col-md-9 small-device-input"
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* student phone number */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Phone number *
                </label>
                <input
                  className="col-md-9 small-device-input"
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* student prefferd way of communication */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Prefered way of comunication *
                </label>
                <div className="col-md-9 small-device-input">
                  <input
                    type="radio"
                    name="communication"
                    value="Email"
                    checked={this.state.communication === "Email"}
                    onChange={this.handleChange}
                    required
                  />{" "}
                  Email{" "}
                  <input
                    type="radio"
                    name="communication"
                    value="Phone"
                    checked={this.state.communication === "Phone"}
                    onChange={this.handleChange}
                    required
                  />{" "}
                  Phone
                </div>
              </div>
              {/* English level */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  English level *
                </label>
                <select
                  className="col-md-9 small-device-input"
                  name="englishLevel"
                  value={this.state.englishLevel}
                  onChange={this.handleChange}
                  required
                >
                  <option required />
                  <option value="A1" required>
                    A1 (Begginer)
                  </option>
                  <option value="A2" required>
                    A2 (Elementary English)
                  </option>
                  <option value="B1" required>
                    B1 (Intermediate English)
                  </option>
                  <option value="B2" required>
                    B2 (Upper-Intermediate English)
                  </option>
                  <option value="C1" required>
                    C1 (Advanced English))
                  </option>
                  <option value="C2" required>
                    C2 (Proficiency English)
                  </option>
                </select>
              </div>
              {/* student start date */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Available To Start *
                </label>
                <input
                  className="col-md-9 small-device-input"
                  type="date"
                  name="dateToStart"
                  value={this.state.dateToStart}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* student skills */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Techical Skills And Courses
                </label>
                <textarea
                  className="col-md-9 small-device-input"
                  type="text"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.handleChange}
                />
              </div>
              {/* student presentation */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Short Personal Presentation
                </label>
                <textarea
                  className="col-md-9 small-device-input"
                  type="text"
                  name="presentation"
                  value={this.state.presentation}
                  onChange={this.handleChange}
                />
              </div>
              {/* study from home  */}
              <div className="row">
                <label className="col-md-3 small-device-label" htmlFor="name">
                  Stydy from home?
                </label>
                <div className="col-md-9 small-device-input">
                  <input
                    type="checkbox"
                    name="homeStudy"
                    value={this.state.homeStudy}
                    checked={this.state.homeStudy === true}
                    onChange={this.handleChange}
                  />{" "}
                  Yes
                </div>
              </div>
              <ButtonWrapper>Update</ButtonWrapper>
            </form>
          </FormWrapperUpdate>
        </div>
      </InfoContainer>
    );
  }
}
