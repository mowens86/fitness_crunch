import React from 'react'
import blogStyle from "./blog.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      },
    }
  `);

    return (
    <section className={blogStyle.blogBG}>
      <div className={blogStyle.blogMaxWidth}>
      
          <div className={blogStyle.blogWrapper}>
          <h1 className={blogStyle.blogH1}>Blog</h1>
          
            <div className={blogStyle.blogGrid}>
              <ol className={blogStyle.blogPosts}>
                
                {data.allContentfulBlogPost.edges.map((edge) => {
                  return (
                    <li className={blogStyle.blogPost}>
                      <Link to={`/blog/${edge.node.slug}`}>
                      <h2 className={blogStyle.blogH2}>{edge.node.title}</h2>
                      <p className={blogStyle.blogP}>Posted: {edge.node.publishedDate}</p>
                      </Link>
                    </li>
                  )
                })}

              </ol>
            </div>
      
        </div>
      
      </div>
    </section>
      )
    }
    
    export default Blog