import { graphql, Link } from "gatsby"
import React from "react"
import logo from "../../static/evija-logo-1560-white.gif"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/VideoPlayer"

const styles = {
  width: "400px",
  marginTop: "80px",
}
const Index = ({ data }) => (
  <Layout>
    <VideoPlayer publicId="gatsby-cloudinary%2Fevija-dynamic-1-cut-1920" />
    <BgImage title="car" fluid={data.image.cloudinary.fluid} overlayColor="">
      <img style={styles} src={logo} alt="" />

      {/* <h1 style={{ color: "white" }}>Headline goes here</h1> */}
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
    image: file(name: { eq: "evija-hero" }) {
      cloudinary: childCloudinaryAsset {
        fluid(maxWidth: 1920) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
export default Index
