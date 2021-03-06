import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function post(props) {
  const post = props.data.wordpressPost
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }}/>
    </Layout>
  )
}


export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
