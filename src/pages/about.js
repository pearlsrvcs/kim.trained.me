import React from "react"
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <Head title = "About"/>
      <h1>About Me</h1>
      <p>I currently am a full-stack mobile and web developer and corporate trainer. What can I do to help you reach your goals?</p>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}
export default AboutPage
