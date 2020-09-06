import React, { Component } from "react";
import "../css/main.css";

export default class Procedure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedure: "",
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
    this.props.handle(this.state.procedure);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="FormTitle">How do you make it?</div>

            <br />
              <input
                className="FormText"
                type="text"
                onChange={this.onChange}
                name="procedure"
                value={this.state.procedure}
              />
          </label>
          <br />
          <input id="button1" value="Next" type="button" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
