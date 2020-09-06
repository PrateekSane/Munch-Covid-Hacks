import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Contact us</h2>
            <p className="lead">Email: Munch@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
