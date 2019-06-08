import React from "react";

export default function ListCollumns() {
  return (
    <div className="container-fluid text-center d-none d-md-block">
      <div className="row">
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">name / age</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">phone number</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">email</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">more info</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">update</p>
        </div>
        <div className="col-10 mx-auto col-md-2">
          <p className="text-uppercase list-heading">remove</p>
        </div>
      </div>
    </div>
  );
}
