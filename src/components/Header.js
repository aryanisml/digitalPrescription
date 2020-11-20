import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Digital Prescription</h1>
      <nav>
        <NavLink activeClassName="active" to="/app" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/app/list">
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
