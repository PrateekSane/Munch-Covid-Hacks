import React, { Component } from "react";

export default class PrepTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prepTime: null,
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
    this.props.handle(this.state.prepTime);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <div className="FormTitle">
              How long does it take?
            </div>
            <br />
              <input
                className="FormText"
                type="text"
                onChange={this.onChange}
                name="prepTime"
                value={this.state.prepTime}
              />
          </label>
          <br />
          <input id="button1" value="Next" type="button" onClick={this.onClick} />
        </form>
      </div>
    );
  }
}
