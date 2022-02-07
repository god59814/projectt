import React from "react";
// CSS
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      // computer: "",
      // player: "",
      click: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return this.setState({
      click: true,
    });
  }

  

  render() {
    return (

      <> 
      {
        this.state.click === false ? 
          ( <button
            className={`btn btn-light m-1 border round-4 square`}
            key={this.props.index}
            onClick={(e) => this.handleClick(e)}
            // value={this.props.defaultValue} // créer la fonction pour changer la value ici
          >
          </button>)
          :
          ( <button
            className={`btn btn-light m-1 border round-4 square`}
            key={this.props.index}
            onClick={(e) => this.handleClick(e)}
            // value={this.props.player}
          >
            {this.props.player}
            </button>)
      }
          </>
    );
  }
}
export default Button;