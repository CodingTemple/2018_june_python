import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="navbar navbar-inverse" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Gem Store</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/PageTwo">Page Two</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;