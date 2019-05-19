import React from "react"
import Head from '../components/head'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <Head title = "Contact"/>
      <h1>Contact Me</h1>
      <h2>I can be reached at kim.ree.mosher@gmail.com</h2>
      <h2>and my phone number is (256)-606-2139.</h2>
      <p>To view my LinkedIn Profile, click <a href="http://www.linkedin.com/in/kimmosher" target="_blank">here.</a></p>
    </Layout>
  )
}
export default ContactPage
