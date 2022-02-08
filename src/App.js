import React from "react";
// Components JS
import Grid from "./components/Grid";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center border">
        <Grid />
      </section>
    );
  }
}
export default App;
