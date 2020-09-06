import React, { Component } from "react";
import Logo from "../../logo.png";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import "../../App.css";
import styles from "../css/Navbar.module.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <div className={styles.mynavbar}>
          <Navbar
            sticky="top"
            bg="dark"
            variant="dark"
            expand="lg"
            style={{ marginBottom: "0px" }}
          >
            <Navbar.Brand href="/">
              <img src={Logo} alt="Munch" className={styles.logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/feed">For You</Nav.Link>
                <Nav.Link href="/CreateRecipe">Create a Recipe!</Nav.Link>
                <NavDropdown title="About Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/AboutMunch">
                    About the Company
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ContactUs">
                    Contact Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Team">
                    Meet the Team
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/GetInvolved">
                    Get Involved{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <Nav.Link href="/Login">Log In</Nav.Link>
                <Nav.Link href="/CreateAccount">Sign Up</Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
