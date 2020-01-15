import { graphql, Link } from "gatsby"
import React from "react"
import BgImage from "../components/BgImage"
import Layout from "../components/layout"
import ResponsivePlayer from "../components/ResponsivePlayer"
import SEO from "../components/seo"
import "../styles/index.css"

const Index = ({ data }) => (
  <Layout>
    <header>
      <nav>
        <ul className="nav-links-1">
          <li className="li-1">Models</li>
          <li className="li-1">Pre-owned</li>
          <li className="li-1">For the drivers</li>
        </ul>

        <h3 className="logo">logo</h3>

        <ul className="nav-links-2">
          <li className="li-2">Test Drive</li>
          <li className="li-2">Dealers</li>
        </ul>
      </nav>
    </header>
    <ResponsivePlayer url="https://res.cloudinary.com/dn3baky3u/video/upload/v1578436685/gatsby-cloudinary/evija-video-1920.mp4" />
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
    evoraGT: file(name: { eq: "evora-gt" }) {
      ...fluidImage
    }
    evoraFour: file(name: { eq: "evora-400-side" }) {
      ...fluidImage
    }
  }
`

export default Index

// previous setup for multiple images:
// query {
//   evoraGT: file(name: { eq: "evora-gt" }) {
//     cloudinary: childCloudinaryAsset {
//       fluid(maxWidth: 1920) {
//         ...CloudinaryAssetFluid
//       }
//     }
//   }
//   evoraFour: file(name: { eq: "evora-400-side" }) {
//     cloudinary: childCloudinaryAsset {
//       fluid(maxWidth: 1920) {
//         ...CloudinaryAssetFluid
//       }
//     }
//   }
// }
