import React, { Component } from 'react';
import './App.css';

class Challenge1 extends Component {
  constructor(props) {
    super(props);
  this.state = {
      cats: 5,
      dogs: 2,
  }
}
  render() {
    let favAnimal;
    if(this.state.cats> this.state.dogs) {
      favAnimal = 'cat'

    }
    else {
      favAnimal = 'dog'
    }
    return (
      
      <div className="App">
        <h1>You have {this.state.cats} cats and {this.state.dogs} dogs. Therefore you are a {favAnimal} person.</h1>
      </div>
    );
  }
}

export default Challenge1;
