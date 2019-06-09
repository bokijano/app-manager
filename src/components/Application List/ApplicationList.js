import React, { Component } from "react";
import ButtonWrapper from "./../Button";

export default class ApplicationList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.applications.length > 0 ? (
          <div>
            {this.props.applications.map(item => (
              <div
                style={{
                  borderColor: "transparent",
                  border: "0.04rem solid rgba(0, 0, 0, 0.2)",
                  boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.2)"
                }}
                key={item.id}
                className="container-fluid"
              >
                <div className="row my-3 text-center">
                  <div className="col-10 mx-auto col-md-2 text-capitalize">
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
                      <ButtonWrapper
                        onClick={() => this.props.openInfo(item.id)}
                        list
                      >
                        more info
                      </ButtonWrapper>
                    </p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="list-paragraph">
                      <ButtonWrapper onClick={() => this.props.updateApp(item.id)} list>update</ButtonWrapper>
                    </p>
                  </div>
                  <div className="col-10 mx-auto col-md-2">
                    <p className="list-paragraph">
                      <ButtonWrapper
                        onClick={() => this.props.handleDelete(item.id)}
                        list
                      >
                        delete
                      </ButtonWrapper>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="container text-center">
            <h1 className="list-heading">List is Empty!</h1>
          </div>
        )}
      </React.Fragment>
    );
  }
}
