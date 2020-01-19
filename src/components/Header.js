import React from "react"
import "../styles/header.css"

const Header = ({ data }) => (
  <header>
    <nav>
      <ul className="nav-ul">
        <li className="li-1 nav-links-1">Models</li>
        <li className="li-1 nav-links-1">Pre-owned</li>
        <li className="li-1 nav-links-1">For the drivers</li>

        <li className="logo">
          <h3>logo</h3>
        </li>

        <li className="li-2 nav-links-2">Test Drive</li>
        <li className="li-2 nav-links-2">Dealers</li>
      </ul>
    </nav>
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
