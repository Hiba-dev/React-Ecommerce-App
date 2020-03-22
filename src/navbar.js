import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './button';


class Navbar extends PureComponent {

  render() {
    return (
      <Nav className="navbar navbar-expand-sm  px-sm-5">
      {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
      <Link to="/">
      <i class="fas fa-headphones-alt" style={{fontSize: "xx-large" , color: "var(--MainYellow)"}}></i>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus " />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </Nav>
    )
  }
}

const Nav = styled.nav`
  background: rgb(61, 54, 73) ;
  .nav-link {
    color:  rgb(19, 214, 221);
    font-size:1.5rem;
    text-transform:capitalize;
  }
  .icon{
    font-size:1.5rem;
    color: var(--MainWhite);
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

export default Navbar