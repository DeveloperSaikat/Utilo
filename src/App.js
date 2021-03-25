import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


import './App.css';
import MainPage from './components/MainPage/mainpage';
import ToDoPage from './containers/ToDoPage/ToDoPage';
import ShortenerPage from './containers/ShortenerPage/ShortenerPage';
import ScratchPadPage from './containers/ScratchPadPage/ScratchPadPage';

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
              <NavLink to="/" exact className="navbar-brand"
              activeClassName="brand-active" 
              activeStyle={{color: 'white'}}>Utilo</NavLink> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="mr-auto nav-list">
                <Nav.Link><NavLink to="todo" className="nav-list-item">ToDo</NavLink></Nav.Link>
                <Nav.Link><NavLink to="short" className="nav-list-item">Shortener</NavLink></Nav.Link>
                <Nav.Link><NavLink to="scratch" className="nav-list-item">ScratchPad</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact component={MainPage} />
          <Route path="/todo"  component={ToDoPage} />
          <Route path="/short" component={ShortenerPage} />
          <Route path="/scratch" component={ScratchPadPage} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
