import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/porg"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/"> Page 1 </Link></div>
    <div><Link to="/page-2/"> Page 2 </Link></div>
   <div><Link to="/page-4/"> Page 4 </Link></div> 
  </Layout>
)

export default ThirdPage
