import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import blogStyle from './blogtemplate.module.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost (slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
            image {
                file {
                    url
                }
            }
        }
    }
`;

const Blog = (props) => {

    return (
        <Layout>
            <section className={blogStyle.blogBG}>
                <div className={blogStyle.blogMaxWidth}>
      
                    <div className={blogStyle.blogsWrapper}>
                        <h1 className={blogStyle.blogH1}>{props.data.contentfulBlogPost.title}</h1>
                        <p className={blogStyle.blogDate}>Posted: {props.data.contentfulBlogPost.publishedDate}</p>
                        <img src={props.data.contentfulBlogPost.image.file.url} alt={props.data.contentfulBlogPost.title}/>
                        <div>{documentToReactComponents(props.data.contentfulBlogPost.body.json)}</div>
                    </div>
      
                </div>
            </section>
            
        </Layout>
    )
}

export default Blog