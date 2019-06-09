import React, { Component } from "react";
import InfoContainer from "./InfoContainer";
import ButtonWrapper from "./../Button";

export default class MoreInfo extends Component {
  render() {
    const {
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
    } = this.props.infoApp;
    return (
      <InfoContainer>
        <div id="info" className="col-11 mx-auto text-center p-4">
          <h2 className="list-heading">Student Info</h2>
          <h5 className="info-head text-capitalize">
            <span style={{ fontWeight: "bolder" }}>Name: </span>
            {name}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Age: </span>
            {age} years
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Email: </span>
            {email}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Phone number: </span>
            {phoneNumber}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Way of Communication: </span>
            {communication}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>English Level: </span>
            {englishLevel}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Available to Start: </span>
            {dateToStart}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>
              Technical Skills and Courses:{" "}
            </span>
            {skills}
          </h5>
          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>
              Short Personal Presentation:{" "}
            </span>
            {presentation}
          </h5>

          <h5 className="info-head">
            <span style={{ fontWeight: "bolder" }}>Study from home: </span>
            {homeStudy ? "Yes" : "No"}
          </h5>

          <ButtonWrapper onClick={this.props.closeInfo} list>
            close info
          </ButtonWrapper>
        </div>{" "}
        >
      </InfoContainer>
    );
  }
}
