import { graphql, Link } from "gatsby"
import React from "react"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import ResponsivePlayer from "../components/ResponsivePlayer"
import SEO from "../components/seo"
import "../styles/index.css"

const Index = ({ data }) => (
  <Layout>
    <div>
      <ResponsivePlayer url="https://res.cloudinary.com/dn3baky3u/video/upload/v1578436685/gatsby-cloudinary/evija-video-1920.mp4" />
    </div>
    <div className="photo-div">
      <BgImage
        title="evora-gt"
        fluid={data.evoraGT.cloudinary.fluid}
        overlayColor=""
      >
        <h1 id="evoraGT-h1" className="model-h1">
          Lotus <b>Evora GT</b>
        </h1>
      </BgImage>
    </div>
    <div>
      <BgImage
        title="evora-400"
        fluid={data.evoraFour.cloudinary.fluid}
        overlayColor=""
      >
        <h1 className="model-h1" style={{ color: "yellow" }}>
          Lotus <b>Evora 400</b>
        </h1>
      </BgImage>
    </div>
    <div>
      <SEO title="Page two" />
      <h1>Index page</h1>
      <br />
      <Link to="/evija">evija</Link>
      <br />
      <Link to="/evora">evora</Link>
    </div>
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    cloudinary: childCloudinaryAsset {
      fluid(maxWidth: 1920) {
        ...CloudinaryAssetFluid
      }
    }
  }
`

export const query = graphql`
  query {
    evoraGT: file(name: { eq: "evora-gt-side" }) {
      ...fluidImage
    }
    evoraFour: file(name: { eq: "evora-400-side" }) {
      ...fluidImage
    }
    logo: file(name: { eq: "lotus-logo" }) {
      ...fluidImage
    }
  }
`

export default Index
