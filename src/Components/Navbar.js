import React, { Component } from 'react'
import {Navbar,Nav,} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';



export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
  
    <Navbar.Brand as={Link} to={"/home"} >GS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/Projects"}>Projects</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
            </div>

            <div>
                
            <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

            </div>
            </Router>
        )
    }
}
