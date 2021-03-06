import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/junkrat"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/"> Page 1 </Link></div>
    <div><Link to="/page-3/"> Page 3 </Link></div>
   <div><Link to="/page-4/"> Page 4 </Link></div> 
  </Layout>
)

export default SecondPage
