import React, { Component } from "react";

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
    console.log("work");
    console.log(this.state.skills);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {/* student name */}
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          {/* student Email */}
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {/* student age */}
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          {/* student phone number */}
          <label>Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          {/* student prefferd way of communication */}
          <label>Prefered way of comunication</label>
          <input
            type="radio"
            name="communication"
            value="Email"
            checked={this.state.communication === "Email"}
            onChange={this.handleChange}
          />{" "}
          Email{" "}
          <input
            type="radio"
            name="communication"
            value="Phone"
            checked={this.state.communication === "Phone"}
            onChange={this.handleChange}
          />{" "}
          Phone
          {/* English level */}
          <label>English level</label>
          <select
            name="englishLevel"
            value={this.state.enhglishLevel}
            onChange={this.handleChange}
          >
            <option value="A1 (Begginer)">A1 (Begginer)</option>
            <option value="A2 (Elementary English)">
              A2 (Elementary English)
            </option>
            <option value="B1 (Intermediate English)">
              B1 (Intermediate English)
            </option>
            <option value="B2 (Upper-Intermediate English)">
              B2 (Upper-Intermediate English)
            </option>
            <option value="C1 (Advanced English)">
              C1 (Advanced English))
            </option>
            <option value="C2 (Proficiency English)">
              C2 (Proficiency English)
            </option>
          </select>
          {/* student start date */}
          <label>Available To Start</label>
          <input
            type="date"
            name="dateToStart"
            value={this.state.dateToStart}
            onChange={this.handleChange}
          />
          {/* student skills */}
          <label>Techical Skills And Courses</label>
          <textarea
            type="text"
            name="skills"
            value={this.state.skills}
            onChange={this.handleChange}
          />
          {/* student presentation */}
          <label>Short Personal Presentation</label>
          <textarea
            type="text"
            name="presentation"
            value={this.state.presentation}
            onChange={this.handleChange}
          />
          {/* study from home  */}
          <label htmlFor="">Stydy from home?</label>
          <input
            type="checkbox"
            name="homeStudy"
            value="true"
            checked={this.state.homeStudy === true}
            onChange={this.handleChange}
          />{" "}
          Yes
          <button>Add</button>
        </form>
      </div>
    );
  }
}
