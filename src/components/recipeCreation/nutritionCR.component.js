import React, { Component } from "react";
import "../css/main.css";

export default class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutrition: null,
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
    this.props.handle(this.state.nutrition);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="FormTitle">
              Include Calorie Info if You would like
            </div>
            
            <br />
              <input
                className="FormText"
                type="text"
                onChange={this.onChange}
                name="nutrition"
                value={this.state.nutrition}
              />
          </label>
          <br />
          <input id="button1" value="Create!" type="button" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
