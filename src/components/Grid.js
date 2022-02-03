import React from "react";
// JS
import Button from "./Button";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      checkedBtn: [],
    };

    // this. = this..bind(this);
  }

  // sauvegarder les index dans checkedBtn

  render() {
    return (
      <article>
        <div>
          <Button index={0}></Button>
          <Button></Button>
          <Button></Button>
        </div>
        <div>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </div>
        <div>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </div>
      </article>
    );
  }
}
export default Grid;
