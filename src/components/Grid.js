import React from "react";
import Button from "./Button";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "X",
      player2: "O",
      player1Turn: true,
      display: "none",
      reset: false,
      clickedBtns: [],
      checkedBtnPlayer1: [],
      checkedBtnPlayer2: [],
      // winningLine : ["0","1","2"], //1st winning line
      // testWinning : ["0", 2, 7,"1", "4", "2"] // Test array containing winningLine
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
    this.checkIfWinP1 = this.checkIfWinP1.bind(this);
    this.checkIfWinP2 = this.checkIfWinP2.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  //Creating a function that will check out our users checkedBtn's array and see if they contain any winning line : if so, the first user that has one wins.
  //   checkWinner(){
  //     const containsAll = this.state.winningLine.every(element => {
  //         return this.state.checkedBtnPlayer1.includes(element);
  //       });

  //       //Returns a bolean : if the 2nd array includes the 1st array, it returns True. If the 2nd array does not include the 1st array, it returns False:
  //       if (containsAll === true) {

  //           return console.log(" Bravo ! Player 1 a gagné ", containsAll);
  //       }
  //   }

  checkIfWinP2() {
    //   console.log(line);
    this.state.winningLines.map((line) => {
      const containsAll = line.every((elem) => {
        return this.state.checkedBtnPlayer2.includes(elem);
      });
      if (containsAll === true) {
        return console.log(" Bravo ! Player 2 a gagné ", containsAll);
      }
      return null;
    });
  }

  checkIfWinP1() {
    this.state.winningLines.map((line) => {
      const containsAll = line.every((elem) => {
        return this.state.checkedBtnPlayer1.includes(elem);
      });
      if (containsAll === true) {
        return console.log(" Bravo ! Player 1 a gagné ", containsAll);
      }
      return null;
    });
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
    // PLAYER 2
    if (this.state.player1Turn === false) {
      const copyArray2 = [...this.state.checkedBtnPlayer2, e.target.id];
      this.setState(
        {
          player1Turn: true,
        },
        () => {
          this.setState({ checkedBtnPlayer2: copyArray2 }, () => {
            console.log("test Array player2: ", this.state.checkedBtnPlayer2);
            e.target.value = this.state.player2;
            this.checkIfWinP2();
          }); //Add fonction flechée
          // console.log(e.target.id);
        }
      );
      //   PLAYER 1
    } else if (this.state.player1Turn === true) {
      const copyArray1 = [...this.state.checkedBtnPlayer1, e.target.id];
      this.setState(
        {
          player1Turn: false,
        },
        () => {
          this.setState({ checkedBtnPlayer1: copyArray1 }, () => {
            console.log("test Array player1: ", this.state.checkedBtnPlayer1);
            e.target.value = this.state.player1;
            this.checkIfWinP1();
          });
          // console.log("id: ",e.target.id);
        }
      );
    }
  }

  handleReset() {
    let clearbuttons = document.querySelectorAll("input");
    clearbuttons.forEach((button) => {
      if (button.value !== "RESET") {
        button.value = "";
      }
    });
    this.setState({ checkedBtnPlayer1: [] });
    this.setState({ checkedBtnPlayer2: [] });
    this.setState({ player1Turn: true });
    console.log("RESET");
  }

  render() {
    return (
      <section>
        <p style={{ display: this.state.display }}>
          Box already ticked ! Please, Select another one
        </p>

        <div style={{ display: "flex" }}>
          <Button onclick={this.handleClick} id="0" />
          <Button onclick={this.handleClick} id="1" />
          <Button onclick={this.handleClick} id="2" />
        </div>

        <div style={{ display: "flex" }}>
          <Button onclick={this.handleClick} id="3" />
          <Button onclick={this.handleClick} id="4" />
          <Button onclick={this.handleClick} id="5" />
        </div>

        <div style={{ display: "flex" }}>
          <Button onclick={this.handleClick} id="6" />
          <Button onclick={this.handleClick} id="7" />
          <Button onclick={this.handleClick} id="8" />
        </div>
        <input type="reset" value="RESET" onClick={this.handleReset}></input>
      </section>
    );
  }
}

export default Grid;
