import React from "react"
import footerStyle from "./styles/footer.module.css"

const Footer = () => {

  return (
    
    <footer className={footerStyle.footerWrapper}>
        <div className={footerStyle.footerContentWrapper}>
        © {new Date().getFullYear()}, FitZ was built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> by Michael Owens
        </div>
    </footer>
  )
}
export default Footer