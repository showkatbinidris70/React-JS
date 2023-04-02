
import React, { Component } from "react";

class Card extends Component {
 render(){
    return(
        <div>
            <h1>{this.props.name}</h1>
        <h3>{this.props.age}</h3>
        </div>
    );
 }
}

export default Card;
