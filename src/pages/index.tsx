import * as React from "react"
import { HeadFC} from "gatsby"
import Layout from '../components/layout'

const IndexPage: React.FC = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
