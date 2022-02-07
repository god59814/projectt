import React from "react";
// Components JS
import Grid from "./components/Grid";
// import Button from "./components/Button";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <section className="d-flex justify-content-center align-items-center border">
        <Grid />
      </section>
    );
  }
}
export default App;
