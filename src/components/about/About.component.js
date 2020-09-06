import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="bg-light">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <br></br>
            <h2>About Munch Cooking App</h2>
            <p className="lead">
              Have lots of notes and don't know what to do it with them? No
              worries! Enter your note in our React.js form below. This form
              takes your title and content of your notes and sends a POST HTTP
              request to the Munch Cooking App database using Express.js. We
              securley store your notes on our MongoDB server. The Munch Cooking
              App App runs on a Node.JS runtime enviornment so our platform is
              highly scalable, secure, fast, and is easily maintained.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
