import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/index/herobg"
import Why from "../components/index/why"

const IndexPage = () => (
  <Layout>
    <SEO title="FitZ" />
      <BackgroundSection />
      <Why />
  </Layout>
)

export default IndexPage
