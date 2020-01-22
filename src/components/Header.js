import React from "react"
import "../styles/header.css"

const Header = ({ data }) => (
  <header>
    <ul className="twitter">
      <li className="logo">
        <h3>logo</h3>
      </li>
      <li className="menu">Models</li>
      <li className="menu">Pre-owned</li>
      <li className="menu">For the drivers</li>

      <li className="menu">Test Drive</li>
      <li className="menu">Dealers</li>
    </ul>
  </header>
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
    logo: file(name: { eq: "lotus-logo" }) {
      ...fluidImage
    }
  }
`

export default Header
