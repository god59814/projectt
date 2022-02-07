import React from "react";
// JS
import Button from "./Button";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      computer: "O",
      player: "X",
      clickedBtns: [],
      defaultValue : "",
      // buttons : {
      //   button1 : "",
      // },
      // btns: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      buttons: [null, null, null, null, null, null, null, null, null]
    };

    // this. = this..bind(this);
  }

  // const listButtons.map((button) => );


  ComputerMove() {
    // if this.setState


    // btns.map((btn) => {
    //   if (btn.value === "X") {
      // null
    // } else {
      // algo computer
    }
    // })
  // }

  // function clickedBtns.map((btn, index) => {
  //     if (btn === index)
  //   })

  // sauvegarder les index dans checkedBtn
  // if (player === "X")
  handleClick(e) {
    e.preventDefault();
    return this.setState({
      click: true,
    });
  }

  renderButton(i) {
    return <Button value={this.state.buttons[i]} />;
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