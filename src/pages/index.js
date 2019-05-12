import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/baby-nippet"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello world</h1>
    <p>Josey is having so much fun building a new Gatsby website.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/page-2/"> Page 2 </Link></div>
    <div><Link to="/page-3/"> Page 3 </Link></div>
   <div><Link to="/page-4/"> Page 4 </Link></div> 
  </Layout>
)

export default IndexPage
