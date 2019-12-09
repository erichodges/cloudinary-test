import { graphql, Link } from "gatsby"
import React from "react"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import ResponsivePlayer from "../components/ResponsivePlayer"
import SEO from "../components/seo"
import "../components/VideoPlayer.css"

const styles = {
  overflow: "hidden",
}

const Index = ({ data }) => (
  <Layout>
    <ResponsivePlayer url="https://res.cloudinary.com/dn3baky3u/video/upload/v1575238928/gatsby-cloudinary/evija-dynamic-1-cut-1920.mp4" />
    <BgImage
      title="evora-gt"
      fluid={data.image.cloudinary.fluid}
      overlayColor=""
      style={styles}
    >
      {/* <img style={styles} src={logo} alt="" /> */}

      <h1 style={{ color: "white" }}>Headline goes here</h1>
    </BgImage>
    <div>
      <SEO title="Page two" />
      <h1>Home page</h1>
      <p>Welcome</p>
      <Link to="/evija">evija</Link>
      <br />
      <Link to="/evora">evora</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    image: file(name: { eq: "evora-gt" }) {
      cloudinary: childCloudinaryAsset {
        fluid(maxWidth: 1920) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
export default Index
