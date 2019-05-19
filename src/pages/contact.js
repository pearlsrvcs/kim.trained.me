import React from "react"
import Head from '../components/head'
import Layout from '../components/layout'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactPage = ({values, errors, touched, isSubmitting}) =>
  (
    <Layout>
      <Head title = "Contact"/>
      <h1>Contact Me</h1>
      <h2>I can be reached at kim.ree.mosher@gmail.com</h2>
      <h2>and my phone number is (256)-606-2139.</h2>
      <p>To view my LinkedIn Profile, click <a href="http://www.linkedin.com/in/kimmosher" target="_blank">here.</a></p>
      <Form>
        <table>
          {touched.email && errors.email && <tr><th></th><th>{errors.email}</th></tr>}
          <tr>
            <th>Email:</th><th><Field type="email" name="email" placeholder="name@gmail.com" value={values.email} /></th>
          </tr>
          {touched.name && errors.name && <tr><th></th><th>{errors.name}</th></tr>}
          <tr>
            <th>Name:</th><th><Field type="name" name="name" placeholder="John Smith" value={values.name} /></th>
          </tr>
          {touched.password && errors.password && <tr><th></th><th>{errors.password}</th></tr>}
          <tr>
            <th>Password:</th><th><Field type="password" name="password" placeholder="********" value={values.password} /></th>
          </tr>
          {touched.confirm && errors.confirm && <tr><th></th><th>{errors.confirm}</th></tr>}
          <tr>
            <th>Confirm:</th><th><Field type="password" name="confirm" placeholder="********" value={values.confirm} /></th>
          </tr>
          <tr>
            <th>Plan</th><th><Field component="select" name="plan"><option value="free">Free</option><option value="premium">Premium</option></Field></th>
          </tr>
          <tr>
            <th></th><th><button disabled = {isSubmitting}>Submit</button></th>
          </tr>

        </table>
      </Form>
    </Layout>
  )


const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      name: '',
      password: '',
      confirm: '',
      plan: 'premium'
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters or longer').required('Password is required'),
    confirm: Yup.string().oneOf([Yup.ref('password')]).required('Please confirm password')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}){
    resetForm()
    setSubmitting(false)
  }
})(ContactPage)
export default FormikApp
