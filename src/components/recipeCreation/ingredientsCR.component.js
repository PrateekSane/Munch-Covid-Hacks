import React, { Component } from "react";
import "../css/main.css";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
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
    this.props.handle(this.state.ingredients);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="FormTitle">
              What's in it?
            </div>
            
            <br />
              <input
                className="FormText"
                type="text"
                onChange={this.onChange}
                name="ingredients"
                value={this.state.ingredients}
              />
          </label>
          <br />
          <br />
          <input id="button1" value="Next" type="button" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
