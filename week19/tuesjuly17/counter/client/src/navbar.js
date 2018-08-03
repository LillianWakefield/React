import React, { Component } from 'react';
import './navbar.css';
import {Link, Route, Switch} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import BlogPosts from './blogposts';
import About from './about.js';
import Skills from './skills.js'
import Projects from './projects.js';

class NavBar extends Component {
    
    render() {
        return (
         <div> 
           
           <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav className="navbar">
      <NavItem>
      <Link to='/about' className="nav-link">About</Link>
      </NavItem>
      <NavItem>
      <Link to='/skills' className="nav-link">Skills</Link>
      </NavItem>
      <NavItem>
      <Link to='/projects' className="nav-link">Projects</Link>
      </NavItem>
      <NavItem>
      <Link to='/blog' className="nav-link">Blog</Link>
      </NavItem>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

        
           
          
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
