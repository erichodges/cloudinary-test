import { Link } from "gatsby"
import React from "react"
import CarImage from "../components/CarImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTwo = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <CarImage />
    </div>
    <h1>Page 2</h1>

    <Link to="/">Home page</Link>
    <br />
  </Layout>
)

export default PageTwo
