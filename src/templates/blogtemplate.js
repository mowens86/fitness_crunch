import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import blogStyle from './blogtemplate.module.css'

export const query = graphql`
query ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = (props) => {

    return (
        <Layout>
            <section className={blogStyle.blogBG}>
                <div className={blogStyle.blogMaxWidth}>
      
                    <div className={blogStyle.blogsWrapper}>
                        <h1 className={blogStyle.blogH1}>{props.data.markdownRemark.frontmatter.title}</h1>
                        <p className={blogStyle.blogP}>{props.data.markdownRemark.frontmatter.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>
      
                </div>
            </section>
            
        </Layout>
    )
}

export default Blog