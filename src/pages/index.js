import { graphql, Link } from "gatsby"
import React from "react"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import ResponsivePlayer from "../components/ResponsivePlayer"
import SEO from "../components/seo"

const Index = ({ data }) => (
  <Layout>
    <ResponsivePlayer url="https://res.cloudinary.com/dn3baky3u/video/upload/v1575238928/gatsby-cloudinary/evija-dynamic-1-cut-1920.mp4" />
    <BgImage
      title="evora-gt"
      fluid={data.evoraGT.cloudinary.fluid}
      overlayColor=""
    >
      <h1 style={{ color: "yellow" }}>Evora GT</h1>
    </BgImage>
    <BgImage
      title="evora-400"
      fluid={data.evoraFour.cloudinary.fluid}
      overlayColor=""
    >
      <h1 style={{ color: "yellow" }}>Evora 400</h1>
    </BgImage>
    <div>
      <SEO title="Page two" />
      <h1>Home page</h1>
      <br />
      <Link to="/evija">evija</Link>
      <br />
      <Link to="/evora">evora</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    evoraGT: file(name: { eq: "evora-gt" }) {
      cloudinary: childCloudinaryAsset {
        fluid(maxWidth: 1920) {
          ...CloudinaryAssetFluid
        }
      }
    }
    evoraFour: file(name: { eq: "evora-400-side" }) {
      cloudinary: childCloudinaryAsset {
        fluid(maxWidth: 1920) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`

export default Index
