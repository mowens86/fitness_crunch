import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/herogallery"

const GalleryPage = () => {
    return (
        <Layout>
            <SEO title="FitZ" />
            <Gallery />
        </Layout>
    )
}

export default GalleryPage