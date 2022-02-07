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
          <Button index={1}></Button>
          <Button index={2}></Button>
        </div>
        <div>
          <Button index={3}></Button>
          <Button index={4}></Button>
          <Button index={5}></Button>
        </div>
        <div>
          <Button index={6}></Button>
          <Button index={7}></Button>
          <Button index={8}></Button>
        </div>
      </article>
    );
  }
}
export default Grid;
