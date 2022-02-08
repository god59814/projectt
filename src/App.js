import React from "react";
// Components JS
// import Grid from "./components/Grid";
// import Button from "./components/Button";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./components/Grid";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center border">
        {/* <Grid /> */}
        <Grid/>
      </section>
    );
  }
}
export default App;