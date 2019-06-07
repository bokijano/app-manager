import React, { Component } from "react";
import FormWrapper from "./FormWrapper";
import ButtonWrapper from "./Button";

export default class AplicationForm extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
    communication: "",
    englishLevel: "",
    dateToStart: "",
    skills: "",
    presentation: "",
    homeStudy: ""
  };

  handleChange = e => {
    const { type, checked, name, value } = e.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addApplication(this.state);
  };

  render() {
    return (
      <FormWrapper className="col-8 mx-auto my-3">
        <div className="container card">
          <form onSubmit={this.handleSubmit}>
            {/* student name */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Full Name *
              </label>

              <input
                className="col-md-9"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* student Email */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Email *
              </label>
              <input
                className="col-md-9"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* student age */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Age *
              </label>
              <input
                className="col-md-9"
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                required
              />
            </div>
            {/* student phone number */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Phone number *
              </label>
              <input
                className="col-md-9"
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                required
              />
            </div>
            {/* student prefferd way of communication */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Prefered way of comunication *
              </label>
              <div className="col-md-9">
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
              <label className="col-md-3" htmlFor="name">
                English level *
              </label>
              <select
                className="col-md-9"
                name="englishLevel"
                value={this.state.enhglishLevel}
                onChange={this.handleChange}
                required
              >
                <option required>
                </option>
                <option value="A1 (Begginer)" required>
                  A1 (Begginer)
                </option>
                <option value="A2 (Elementary English)" required>
                  A2 (Elementary English)
                </option>
                <option value="B1 (Intermediate English)" required>
                  B1 (Intermediate English)
                </option>
                <option value="B2 (Upper-Intermediate English)" required>
                  B2 (Upper-Intermediate English)
                </option>
                <option value="C1 (Advanced English)" required>
                  C1 (Advanced English))
                </option>
                <option value="C2 (Proficiency English)" required>
                  C2 (Proficiency English)
                </option>
              </select>
            </div>
            {/* student start date */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Available To Start *
              </label>
              <input
                className="col-md-9"
                type="date"
                name="dateToStart"
                value={this.state.dateToStart}
                onChange={this.handleChange}
                required
              />
            </div>
            {/* student skills */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Techical Skills And Courses
              </label>
              <textarea
                className="col-md-9"
                type="text"
                name="skills"
                value={this.state.skills}
                onChange={this.handleChange}
              />
            </div>
            {/* student presentation */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Short Personal Presentation
              </label>
              <textarea
                className="col-md-9"
                type="text"
                name="presentation"
                value={this.state.presentation}
                onChange={this.handleChange}
              />
            </div>
            {/* study from home  */}
            <div className="row">
              <label className="col-md-3" htmlFor="name">
                Stydy from home?
              </label>
              <div className="col-md-9">
                <input
                  type="checkbox"
                  name="homeStudy"
                  value="true"
                  checked={this.state.homeStudy === true}
                  onChange={this.handleChange}
                />{" "}
                Yes
              </div>
            </div>


            <ButtonWrapper>Add application to the list</ButtonWrapper>
          </form>
        </div>
      </FormWrapper>
    );
  }
}
