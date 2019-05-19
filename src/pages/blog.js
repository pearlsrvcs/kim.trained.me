import React from "react"
import Head from '../components/head'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (sort:{fields:publishedDate, order:DESC}){
        edges {
          node {
            title
            fromNow: publishedDate(fromNow: true)
            publishedDate(formatString:"MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title = "Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return(
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.fromNow}: {edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
        }

      </ol>
    </Layout>
  )

export default BlogPage
