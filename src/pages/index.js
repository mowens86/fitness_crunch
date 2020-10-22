import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/index/herobg"
import Why from "../components/index/why"
import PackageSection from "../components/index/packagesbg"

const IndexPage = () => (
  <Layout>
    <SEO title="FitZ" />
      <BackgroundSection />
      <Why />
      <PackageSection />
  </Layout>
)

export default IndexPage
