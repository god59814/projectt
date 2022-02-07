import React from "react";
// JS
import Button from "./Button";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      player1: "X",
      player2: "O",
      // clickedBtns: [],
      // defaultValue: "",
      // buttons: [null, null, null, null, null, null, null, null, null],
      buttons: Array(9).fill(null),
      // Array est un tableau de 9 elements, fill = remplir -> null
      // Chaque elements correspond à null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const updatedButtons = this.state.buttons;
    updatedButtons[i] = "X";
    // updatedButtons.push({ i });
    this.setState({
      buttons: updatedButtons,
    });
    console.log(this.state.buttons);
  }

  renderButton(i) {
    return (
      <Button
        value={this.state.buttons[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <article>
        <div>
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
        </div>
        <div>
          {this.renderButton(3)}
          {this.renderButton(4)}
          {this.renderButton(5)}
        </div>
        <div>
          {this.renderButton(6)}
          {this.renderButton(7)}
          {this.renderButton(8)}
        </div>
      </article>
    );
  }
}

export default Grid;
