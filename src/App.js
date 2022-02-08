import React from "react";
// Components JS
<<<<<<< HEAD
// import Grid from "./components/Grid";
// import Button from "./components/Button";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./components/Grid";
=======
import Grid from "./components/Grid";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> d4f0e5b990c2e6cadaa9d19b8fd62a1074d2ea1b

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center border">
<<<<<<< HEAD
        {/* <Grid /> */}
        <Grid/>
=======
        <Grid />
>>>>>>> d4f0e5b990c2e6cadaa9d19b8fd62a1074d2ea1b
      </section>
    );
  }
}
export default App;