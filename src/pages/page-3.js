import { graphql, Link } from "gatsby"
import React from "react"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
  <Layout>
    <BgImage title="car" fluid={data.image.cloudinary.fluid} overlayColor="">
      <h1 style={{ color: "white" }}>Headline goes here</h1>
    </BgImage>
    <div>
      <SEO title="Page Two" />
      <h1>third page</h1>
      <p>Yo dude, Welcome to page 3</p>
      <Link to="/">Homepage</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    image: file(name: { eq: "car" }) {
      cloudinary: childCloudinaryAsset {
        fluid(maxWidth: 1920) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
export default ThirdPage
