import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import "./css/main.css";
//AROOP. Add in the libraries and stuff to create a login system here

//AROOP. Add in the libraries and stuff to create a login system here.
//yessir - Aroop

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password,
    };

    //@AROOP. USE AXIOS GET TO GET FROM THE DATABASE ON THE LOGIN INFO. I AM NOT SURE HOW IT WORKS SO IM LEAVING IT VAGUE
    Axios.get("http://localhost:5000/user/:id", loginUser).then((res) =>
      console.log(res)
    );
    this.setState({
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <Form style={{ height: 347 }} onSubmit={this.onSubmit}>
        <Form.Label
          className="SignLogFormTitle"
          style={{ height: 60, fontSize: 30 }}
        >
          Log In
        </Form.Label>

        <br />
        <Form.Group
          controlId="formBasicEmail"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            name="email"
            value={this.state.email}
            placeholder=" Email"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            name="password"
            value={this.state.password}
            placeholder=" Password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Text className="text-muted">
          Start Learning Some New Recipies!
        </Form.Text>
        <br />
        <Button variant="primary" type="submit" style={{ width: 300 }}>
          Log In!
        </Button>
      </Form>
    );
  }
}
