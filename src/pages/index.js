import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/images/baby-nippet"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello world</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lectus eu sapien dictum vehicula eu sit amet nisi. Cras rutrum, massa ut laoreet finibus, purus dolor rhoncus magna, vitae mollis ipsum sapien in massa. Donec tincidunt pellentesque nisi et viverra. In hendrerit ut diam id accumsan.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div><Link to="/page-2/"> Page 2 </Link></div>
    <div><Link to="/page-3/"> Page 3 </Link></div>
   <div><Link to="/page-4/"> Page 4 </Link></div> 
  </Layout>
)

export default IndexPage
