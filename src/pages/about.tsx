import * as React from "react"
import { HeadFC, Link } from "gatsby"
import Layout from '../components/layout'

const AboutPage: React.FC = () => {
    return (
        <main>
          <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
          </Layout>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Home Page</title>
