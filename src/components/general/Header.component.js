import React, { Component } from "react";
import "../../App.css";
import styles from "../css/Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <header className="text-white" style={{ backgroundColor: "#17d45c" }}>
        <div className={styles.parallax}>
          <h1 className={styles.header}>Welcome to Munch Cooking App</h1>
          <p className="lead" id={styles.subheader}>
            An App To Help Aspiring Homecooks
          </p>
        </div>
      </header>
    );
  }
}
