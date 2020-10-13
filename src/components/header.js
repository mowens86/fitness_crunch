import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyle from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: `center`
      }}
    >
      <h1 style={{ 
        margin: 0
        }}>
        <Link to="/" className={headerStyle.bigLink}>
        {siteTitle}</Link>
      </h1>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        alignItems: `center`,
        margin: `0`
      }}>
        <li>
 
        </li>
        <li><Link to ="/" className={headerStyle.smallLink}>Home</Link></li>
        <li><Link to ="/about" className={headerStyle.smallLink}>About Us</Link></li>
        <li><Link to ="/classes" className={headerStyle.smallLink}>Classes</Link></li>
        <li><Link to ="/gallery" className={headerStyle.smallLink}>Gallery</Link></li>
        <li><Link to ="/contact" className={headerStyle.smallLink}>Contact</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
