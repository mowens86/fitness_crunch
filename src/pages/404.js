import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Four from "../components/404/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Four/>
  </Layout>
)

export default NotFoundPage
