import React, { Component } from "react";
import "../css/main.css";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    this.props.handle(this.state.title);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="FormTitle">
              What are you making today?
            </div>
            <br />
              <input
                className="FormText"
                type="text"
                onChange={this.onChange}
                name="title"
                value={this.state.title}
              />
          </label>
          <br />
          <input id="button1" value="Next" type="button" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
