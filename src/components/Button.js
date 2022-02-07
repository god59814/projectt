import React from "react";
// CSS
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <button
        className={`btn btn-light m-1 border round-4 square`}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
export default Button;
