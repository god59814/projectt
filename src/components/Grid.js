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
      buttons: [null, null, null, null, null, null, null, null, null],
    };
    // this. = this..bind(this);


  }


  render() {
    return (
      <article>
        <div>
          <Button />
          <Button />
          <Button />
        </div>
        <div>
          <Button />
          <Button />
          <Button />
        </div>
        <div>
          <Button />
          <Button />
          <Button />
        </div>
      </article>
    );
  }
}
export default Grid;
