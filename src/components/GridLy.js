import React from "react";
import ButtonLy from "./ButtonLy";

class GridLy extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "X",
      player2: "O",
      player1Turn: true,
      display: "none",
      checkedBtnPlayer1: [],
      checkedBtnPlayer2: [],
      //   winningLine: ["0", "1", "2"], //1st winning line
      winningLines: [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
      ],
    };

    //Bind functions
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  //Creating a function that will check out our users checkedBtn's array and see if they contain any winning line : if so, the first user that has one wins.
  checkWinner() {
    this.state.winningLines.map((line) => {
      //   console.log(line);
      if (this.state.checkedBtnPlayer1 === line) {
        return console.log(" Bravo ! Player 1 a gagné ");
      }
      return console.log("Compare :", this.state.checkedBtnPlayer1, line);
    });

    //Returns a bolean : if the 2nd array includes the 1st array, it returns True. If the 2nd array does not include the 1st array, it returns False:
    // if (containsAll === true) {
    //   return console.log(" Bravo ! Player 1 a gagné ", containsAll);
    // }
  }

  handleClick(e) {
    //If the button is already clicked, the user can't select it and gets an error message :
    if (e.target.value !== "") {
      return this.setState(
        {
          display: "initial",
        },
        () => {
          setTimeout(() => {
            this.setState({ display: "none" });
          }, 1900);
        }
      );
    }

    if (this.state.player1Turn === false) {
      const copyArray2 = [...this.state.checkedBtnPlayer2, e.target.id];
      this.setState(
        {
          player1Turn: true,
        },
        () => {
          this.setState({ checkedBtnPlayer2: copyArray2 });
          e.target.value = this.state.player2;
          console.log("test Array player2: ", this.state.checkedBtnPlayer2);
          // console.log(e.target.id);
        }
      );
    } else if (this.state.player1Turn === true) {
      this.setState(
        {
          player1Turn: false,
        },
        () => {
          const copyArray1 = [...this.state.checkedBtnPlayer1, e.target.id];
          this.setState({ checkedBtnPlayer1: copyArray1 });
          console.log("test Array player1: ", this.state.checkedBtnPlayer1);
          e.target.value = this.state.player1;
          // console.log("id: ",e.target.id);
        }
      );
    }
    this.checkWinner();
  }

  render() {
    return (
      <section>
        <p style={{ display: this.state.display }}>
          Box already ticked ! Please, Select another one
        </p>

        <div style={{ display: "flex" }}>
          <ButtonLy onclick={this.handleClick} id="0" />
          <ButtonLy onclick={this.handleClick} id="1" />
          <ButtonLy onclick={this.handleClick} id="2" />
        </div>

        <div style={{ display: "flex" }}>
          <ButtonLy onclick={this.handleClick} id="3" />
          <ButtonLy onclick={this.handleClick} id="4" />
          <ButtonLy onclick={this.handleClick} id="5" />
        </div>

        <div style={{ display: "flex" }}>
          <ButtonLy onclick={this.handleClick} id="6" />
          <ButtonLy onclick={this.handleClick} id="7" />
          <ButtonLy onclick={this.handleClick} id="8" />
        </div>
      </section>
    );
  }
}

export default GridLy;
