import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"

const AboutPage = () => {
    return (
        <Layout>
        <SEO title="FitZ" />
        <About/>
        </Layout>
    )
}

export default AboutPage