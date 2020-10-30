import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Success from "../components/success/success"

const SuccessPage = () => (
  <Layout>
    <SEO title="Message Success" />
    <Success/>
  </Layout>
)

export default SuccessPage