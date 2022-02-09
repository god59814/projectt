import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          className={`btn btn-light m-1 border round-4 square`}
          type="button"
          style={{ display: "block" }}
          onClick={this.props.onclick}
          disabled={this.props.disabled}
          id={this.props.id}
        ></input>
      </div>
    );
  }
}
//Fin button

export default Button;
