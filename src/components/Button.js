import React from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      computer: "",
      player: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return this.setState({
      player: "X",
    });
  }

  render() {
    return (
      <button
        className="btn btn-light p-4 m-1 border round-4"
        key={this.props.index}
        onClick={(e) => {
          this.handleClick(e);
        }}
      >
        {this.state.player}
      </button>
    );
  }
}
export default Button;
