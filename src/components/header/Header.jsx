import React from 'react';
import logo from '../../images/ebay.png';
import { HeaderContainer } from './HeaderStyled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <img className="logo" src={logo} alt="Logo" width="120" height="120" />
      <nav>
        <NavLink
          exact
          to="/"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="navLink"
          activeClassName="activeNavLink"
        >
          About
        </NavLink>
        {/* <NavLink
          to="/productsform"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Products Form
        </NavLink>
        <NavLink
          to="/productsList"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Products List
        </NavLink> */}
        <NavLink
          to="/products"
          className="navLink"
          activeClassName="activeNavLink"
        >
          Products
        </NavLink>
        <NavLink to="/cart" className="navLink" activeClassName="activeNavLink">
          Cart
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
