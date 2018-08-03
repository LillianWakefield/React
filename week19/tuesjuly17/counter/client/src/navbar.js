import React, { Component } from 'react';
import './navbar.css';
import {Link, Route, Switch} from 'react-router-dom';
import BlogPosts from './blogposts';
import About from './about.js';
import Skills from './skills.js'
import Projects from './projects.js';

class NavBar extends Component {
    
    render() {
        return (
         <div>  
          <header className="header">
            <nav className="navbar navbar-default navbar-fixed-top sticky">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li className="nav-link"><Link to='/about'>About</Link></li>
                      <li className="nav-link"><Link to='/skills'>Skills</Link></li>
                      <li className="nav-link"><Link to='/projects'>Projects</Link></li>
                      <li className="nav-link"><Link to='/blog'>Blog</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
          </header>
    <Switch>
      <Route path ='/' exact={true} component={About}/>
      <Route path ='/about' component={About}/>
      <Route path ='/blog' component={BlogPosts}/>
      <Route path ='/skills' component={Skills}/>
      <Route path ='/projects' component={Projects}/>
    </Switch>
   </div>

    )
  }
}
export default NavBar
