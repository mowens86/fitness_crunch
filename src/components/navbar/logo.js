// Logo.js

import React from "react"
import { Link } from "gatsby"
import navbarStyle from "./navbar.module.css"


const Logo = () => {
    return (
        <h1 style={{ 
            margin: 0
            }}>
            <Link to="/" className={navbarStyle.bigLink}>FITZ</Link>
          </h1>

    )

}

export default Logo