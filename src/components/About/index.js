// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const About = () => (
  <div className="about">
    <nav>
      <NavLink
        activeClassName="selected"
        className="nav-link"
        to="/"
      >
        Search His Beans
      </NavLink>
    </nav>
    <h1>About His Beans</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quibusdam voluptas tempora, in doloremque nisi id, voluptate, magnam ratione amet delectus eveniet porro neque aperiam nam alias. Molestias, quaerat, rem.</p>
  </div>
);

export default About;
