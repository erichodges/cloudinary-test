import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import ResponsivePlayer from "../components/ResponsivePlayer"
import SEO from "../components/seo"
import "../components/VideoPlayer.css"

// const styles = {
//   width: "400px",
// }

// code to put in Layout for iframe videoPlayer
// <VideoPlayer publicId="gatsby-cloudinary%2Fevija-dynamic-1-cut-1920" />
const Index = ({ data }) => (
  <Layout>
    <ResponsivePlayer url="https://res.cloudinary.com/dn3baky3u/video/upload/v1575238928/gatsby-cloudinary/evija-dynamic-1-cut-1920.mp4" />
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
