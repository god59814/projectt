import React from "react";
// CSS
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      player: "",
      player1: true,
      click: true,
      player2 : "O"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.player1 === false) {
      this.setState({player1 : true, player : "O"})
      console.log();

    } else if (this.state.player1 === true) {
      this.setState({player1 : false, player : "X"})
    }

  }

  
  render() {
    return (
      <> 
      {
        this.state.player1 === false ? 
          ( <button
            className={`btn btn-light m-1 border round-4 square`}
            key={this.props.index}
            onClick={(e) => this.handleClick(e)}
            value = "O"
      
          >
            {this.state.player}

          </button>)
          :
          ( <button
            className={`btn btn-light m-1 border round-4 square`}
            key={this.props.index}
            onClick={(e) => this.handleClick(e)}
            value="X"
          >
            {this.props.player2}

            </button>)
      }
          </>
    );
  }
}
export default Button;
