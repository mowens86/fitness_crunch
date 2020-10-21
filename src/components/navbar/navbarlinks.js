// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: .65rem;
  font-weight: 900;
  display: inline-block;
  white-space: nowrap;
  padding-top: .5rem;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #ABC502;
    height: 1px;
    transition: all 0.3s ease-in;
  }

  :hover {
    color: #ABC502;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/classes">Classes</NavItem>
      <NavItem to="/gallery">Gallery</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/404">Contact</NavItem>
    </>
  )
}

export default NavbarLinks