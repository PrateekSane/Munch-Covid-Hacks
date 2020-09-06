import React, { Component } from "react";
import styles from "../css/Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <footer id={styles.footer} className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Munch: Prateek, Kush, and Aroop 2020
          </p>
        </div>
      </footer>
    );
  }
}
