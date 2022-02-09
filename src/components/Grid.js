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
      displayP1Won: "none",
      displayP2Won: "none",
      displayDraw: "none",
      displayRestart: "none",
      clickedBtns: [],
      checkedBtnPlayer1: [],
      checkedBtnPlayer2: [],
      winner: false,
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

  checkIfWinP2() {
    //   console.log(line);
    this.state.winningLines.map((line) => {
      const containsAll = line.every((elem) => {
        return this.state.checkedBtnPlayer2.includes(elem);
      });
      if (containsAll === true) {
        for (let i = 0; i < line.length; i++) {
          let id = line[i];
          let allButtons = document.querySelectorAll("input");

          allButtons.forEach((button) => {
            if (button.id === id) {
              setInterval(() => {
                button.style.background = "red";
              }, 100);

              setInterval(() => {
                button.style.background = "white";
              }, 8000);

              setInterval(() => {
                button.style.background = "red";
              }, 1000);

              setInterval(() => {
                button.style.background = "white";
              }, 1200);
            }
          });
        }
        this.setState({
          displayP2Won: "initial",
          displayRestart: "initial",
          displayDraw: "none",
          winner: true,
        });
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
        for (let i = 0; i < line.length; i++) {
          let id = line[i];
          let allButtons = document.querySelectorAll("input");

          allButtons.forEach((button) => {
            if (button.id === id) {
              setInterval(() => {
                button.style.background = "green";
              }, 100);

              setInterval(() => {
                button.style.background = "white";
              }, 8000);

              setInterval(() => {
                button.style.background = "green";
              }, 1000);

              setInterval(() => {
                button.style.background = "white";
              }, 1200);
            }
          });
        }
        this.setState({
          displayP1Won: "initial",
          displayRestart: "initial",
          displayDraw: "none",
          winner: true,
        });
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
          });
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
        }
      );
    }
    const copyClickedBtns = this.state.clickedBtns;
    copyClickedBtns.push(e.target.id);
    this.setState({ clickedBtns: copyClickedBtns });
    console.log(this.state.clickedBtns);
    if (this.state.clickedBtns.length === 9 && this.state.winner === false) {
      this.setState({ displayRestart: "initial", displayDraw: "initial" });
      console.log("match nul");
    }
  }

  handleReset() {
    let clearbuttons = document.querySelectorAll("input");
    clearbuttons.forEach((button) => {
      if (button.value !== "RESET" || button.value !== "Rejouer") {
        button.value = "";
      }
    });
    this.setState({
      checkedBtnPlayer1: [],
      checkedBtnPlayer2: [],
      clickedBtns: [],
      player1Turn: true,
    });
    this.setState({
      displayP2Won: "none",
      displayP1Won: "none",
      displayDraw: "none",
      displayRestart: "none",
    });
    console.log("RESET");

  }

  render() {
    
    return (
      <section className="row justify-content-center">
        <div className="players col border border-warning rounded p-3 text-center m-2 d-flex flex-column justify-content-center align-items-center">
          {this.state.player1Turn ? (
            <p>
              Your turn <span className="red">Player1</span> : X
            </p>
          ) : (
            <p>
              Your turn <span className="green">Player2</span> : O
            </p>
          )}
          <input
            className={`btn btn-dark m-1`}
            type="reset"
            value="RESET"
            onClick={this.handleReset}
          />
        </div>
        <div className="grid col border border-success rounded p-3 m-2">
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
        </div>
        <div className="winningScenarios col border border-danger rounded p-3 m-2 d-flex flex-column justify-content-center align-items-center">
          <p className="warning" style={{ display: this.state.display }}>
            Box already ticked ! Please, Select another one
          </p>
          <p style={{ display: this.state.displayP2Won }}>Player 2 won !!</p>
          <p style={{ display: this.state.displayP1Won }}>Player 1 won !!</p>
          <p style={{ display: this.state.displayDraw }}>
            It's a draw... Play again?
          </p>
          <input
            className={`btn btn-dark m-1 ms-2`}
            style={{ display: this.state.displayRestart }}
            type="button"
            value="Restart"
          />
        </div>
        
      </section>
    );
  }
}

export default Grid;