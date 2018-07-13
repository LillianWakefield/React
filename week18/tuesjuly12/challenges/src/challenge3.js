import React, { Component } from 'react';
import './App.css';
import Card from './card.js'

class Challenge3 extends Component {
    constructor(props) {
    super(props);
    this.state = {
            pokerHand: [
                {
                    suit: "clubs",
                    number: 2
                },
                {
                    suit: "hearts",
                    number: 7
                }
            ]
        
    };
    };

   
    render() {
        var deck = this.state.pokerHand.map((card, index) => {
        
            return <Card suit={card.suit} number={card.number}/>
          })
        return (
          <div className="App">
          <div>{deck}</div>
          </div>
        );
      }
    }

    
    export default Challenge3;
    