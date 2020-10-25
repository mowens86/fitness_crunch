import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import heroStyle from "./herobg.module.css"
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "fitz_bg_1920x1080.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className={heroStyle.heroWrapper}> 
            <div className={heroStyle.heroContentWrapper}>
            <h1 className={heroStyle.heroH1}>Welcome to FitZ</h1>
            <h2 className={heroStyle.heroH2}>Dream Big, Lift Smart, Stay Fit</h2>
            <p className={heroStyle.heroP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo neque eu velit scelerisque, tristique accumsan ex condimentum. Donec vel dapibus neque, nec egestas metus.</p>
            <a href="/" className={heroStyle.heroButton}>Join The Club</a>
            </div>
          </div>

        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection