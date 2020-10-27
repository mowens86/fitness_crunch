import React from 'react'
import blogStyle from "./blog.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    return (
    <section className={blogStyle.blogBG}>
      <div className={blogStyle.blogMaxWidth}>
      
          <div className={blogStyle.blogsWrapper}>
          <h1 className={blogStyle.blogH1}>Blog</h1>
          
            <div className={blogStyle.blogGrid}>
              <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                    <li>
                      <Link to={`/blog/${edge.node.fields.slug}`}>
                      <h2 className={blogStyle.blogH2}>{edge.node.frontmatter.title}</h2>
                      <p className={blogStyle.blogP}>{edge.node.frontmatter.date}</p>
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