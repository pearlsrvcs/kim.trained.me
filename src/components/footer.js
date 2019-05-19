import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          author,
          currentYear
        }
      }
    }
    `)
  return (
    <footer className={footerStyles.footer}>    
      <p>Created by {data.site.siteMetadata.author}, © {data.site.siteMetadata.currentYear}</p>
    </footer>
  )
}
export default Footer
