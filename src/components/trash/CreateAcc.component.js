import React, { Component } from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./css/main.css";
export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    Axios.post("http://localhost:5000/user/addUser", newUser).then((res) =>
      console.log(res)
    );
    this.setState({
      username: "",
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <Form style={{ height: 347 }} onSubmit={this.onSubmit}>
        <Form.Label style={{ height: 70, fontSize: 40 }}>Sign Up!</Form.Label>

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
          controlId="formBasicUsername"
          style={{ width: 400 }}
          className="mx-auto"
        >
          <Form.Control
            name="username"
            value={this.state.username}
            placeholder=" Username"
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
          We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <Button variant="primary" type="submit" style={{ width: 300 }}>
          Sign Up!
        </Button>
      </Form>
    );
  }
}
