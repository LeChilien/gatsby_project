import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/woody"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page four" />
    <h1>Hi from the fourth page</h1>
    <p>Welcome to page 4</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link tto="/"> Page 1 </Link></div>
   <div><Link to="/page-2/"> Page 2 </Link></div> 
    <div><Link to="/page-3/"> Page 3 </Link></div>
  </Layout>
)

export default FourthPage
