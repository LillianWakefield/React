import React, { Component } from 'react';
import './App.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render(){
return (<div className="card">{this.props.suit}<br/>{this.props.number}</div>)
    }
}

export default Card;