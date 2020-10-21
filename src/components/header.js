import PropTypes from "prop-types"
import React from "react"
import navbarStyle from "./styles/navbar.module.css"
import Navbar from "./navbar/navbar"

const Header = () => {

  return (
    
    <header className={navbarStyle.fixedHeader}>
      <Navbar/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
