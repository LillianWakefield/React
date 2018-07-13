import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Challenge1 from './challenge1.js';
import Challenge2 from './challenge2.js';
import Challenge3 from './challenge3.js';

class App extends Component {
  constructor(props) {
  super(props);
}
  render() {
    return (
      <div>
      <div className='navbar'>
          <Link to='/challenge1'>Challenge 1</Link>
          <Link to='/challenge2'>Challenge 2</Link>
          <Link to='/challenge3'>Challenge 3</Link>
      </div>
      <Switch>
      <Route path ='/challenge1' component={Challenge1}/>
      <Route path ='/challenge2' component={Challenge2}/>
      <Route path ='/challenge3' component={Challenge3}/>
      </Switch>
      </div>
  )
}
}
export default App;
