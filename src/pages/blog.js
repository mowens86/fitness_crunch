import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog/blog"

const AboutPage = () => {
    return (
        <Layout>
        <SEO title="FitZ" />
        <Blog/>
        </Layout>
    )
}

export default AboutPage