import React from "react";


class ButtonLy extends React.Component {
    
    constructor() {
        super();
        this.state = {};

   
      }
      

    render() {

        return(
                <div>

                <input className={`btn btn-light m-1 border round-4 square`}
                type="button" 
                style ={{display : "block"}}
                onClick={this.props.onclick}
                id={this.props.id}></input>
                </div>
        )
    }
}



 




export default ButtonLy;