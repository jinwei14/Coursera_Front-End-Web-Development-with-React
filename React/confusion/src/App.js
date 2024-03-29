import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'

function dishes(props) {
  return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };

  }

  render(){
  return (
    <div>
      <Navbar dark color = "primary">
        <div className = "container">
           <NavbarBrand href="/">Ristore ccon Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
  );
}
}

export default App;
