import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/VideoPlayer.css"

// const styles = {
//   width: "400px",
// }

// code to put in Layout for iframe videoPlayer
// <VideoPlayer publicId="gatsby-cloudinary%2Fevija-dynamic-1-cut-1920" />
const Index = ({ data }) => (
  <Layout>
    <div className="carvideo">
      <video controls autoPlay muted data-ar="1.778" playsInLine loop>
        <source
          src="https://77448790ecdce6d45774-3819184e75e4b8f6b5369812f0a4785e.ssl.cf3.rackcdn.com/evija/evija-dynamic-1-cut-1920.mp4"
          type="video/mp4"
          media="screen and (min-device-width:641px)"
        />
        <source
          src="https://77448790ecdce6d45774-3819184e75e4b8f6b5369812f0a4785e.ssl.cf3.rackcdn.com/evija/evija-dynamic-1-cut-640.mp4"
          type="video/mp4"
          media="screen and (max-device-width:640px)"
        />
        If you can't see this video, you should update your browser. :-)
      </video>
    </div>
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
