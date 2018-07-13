import React, { Component } from 'react';
import './App.css';

class Challenge2 extends Component {
  constructor(props) {
  super(props);
  this.state = {
      count: 0,
  };
 
}
plusOne = ()=>{
  this.setState({ count: this.state.count + 1 })
}
  render() {

    return (
      
      <div className="App">
      <h1>Count: {this.state.count}</h1>
        <button onClick={this.plusOne}>Click Me!</button>
      </div>
    );
  }
}

export default Challenge2;
