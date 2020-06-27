import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <h1>This app is good</h1>
      <p>Log in to see more</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
  )
}
