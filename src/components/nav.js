'use strict';
const React = require('react');
const NavLink = require('react-router-dom').NavLink;

function nav() {
  return (
  <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
    <a className='navbar-brand' href='/'>ZW</a>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink exact className='nav-link' to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/add'>Add</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = nav;



