import React from "react";
// Components JS
import Add from "./components/Add";
import Button from "./components/Button";
// CSS
import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  render() {
    return (
      <section>
        <Add />
        <Button />
        {/* Modification de Pauline */}
        <Button />
        {/* Modification de Anita */}
      </section>
    );
  }
}
export default App;
