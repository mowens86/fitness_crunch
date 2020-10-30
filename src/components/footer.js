import React from "react"
import footerStyle from "./styles/footer.module.css"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    
    <footer className={footerStyle.footerWrapper}>
        <div className={footerStyle.footerContentWrapper}>
        © {new Date().getFullYear()}, FitZ was built with
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> by {data.site.siteMetadata.author} (<a href="https://www.mowenstech.com/" target="_blank" rel="noreferrer">View Portfolio</a>)
        </div>
    </footer>
  )
}
export default Footer