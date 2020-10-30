import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/index/herobg"
import Why from "../components/index/why"
import PackageSection from "../components/index/packagesbg"
import Contact from "../components/index/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="FitZ" />
    <BackgroundSection />
    <Why />
    <PackageSection />
    <Contact />
  </Layout>
)

export default IndexPage
