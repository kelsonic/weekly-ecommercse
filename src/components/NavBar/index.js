import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class NavBar extends Component {
  render() {
    return (
      <div className="row main-nav">
        <div className="col s4">
          <h1>Coop's Hat Shop</h1>
        </div>
        <div className="col s6 push-s2 nav">
          <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
          <span> | </span>
          <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
          <span> | </span>
          <NavLink activeClassName="selected" className="nav-link" to="/contact">Contact</NavLink>
          <span> | </span>
          <NavLink activeClassName="selected" className="nav-link" to="/Shop">Shop</NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
