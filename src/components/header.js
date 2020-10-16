import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import headerStyle from "./styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`
    }}
  >
    <div className={headerStyle.headerFlex}>
      <h1 style={{ 
        margin: 0
        }}>
        <Link to="/" className={headerStyle.bigLink}>
        {siteTitle}</Link>
      </h1>

      <ul className={headerStyle.menuFlex}>
        <li></li>
        <li><Link to ="/" className={headerStyle.smallLink}>Home</Link></li>
        <li><Link to ="/about" className={headerStyle.smallLink}>About Us</Link></li>
        <li><Link to ="/classes" className={headerStyle.smallLink}>Classes</Link></li>
        <li><Link to ="/gallery" className={headerStyle.smallLink}>Gallery</Link></li>
        <li><Link to ="/contact" className={headerStyle.smallLink}>Contact</Link></li>
      </ul>
    </div>

    <div id="hamBar" className={headerStyle.mobileHamburger}>
      <a href="" className={headerStyle.mobileHamLink}>
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>

    <ul className={headerStyle.mobileMenuFlex}>
        <li><Link to ="/" className={headerStyle.smallMobileLink}>Home</Link></li>
        <li><Link to ="/about" className={headerStyle.smallMobileLink}>About Us</Link></li>
        <li><Link to ="/classes" className={headerStyle.smallMobileLink}>Classes</Link></li>
        <li><Link to ="/gallery" className={headerStyle.smallMobileLink}>Gallery</Link></li>
        <li><Link to ="/contact" className={headerStyle.smallMobileLink}>Contact</Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
