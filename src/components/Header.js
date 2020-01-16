import { graphql } from "gatsby"
import React from "react"
import "../styles/header.css"

const Header = ({ data }) => (
  <header>
    <nav>
      <ul className="nav-links-1">
        <li className="li-1">Models</li>
        <li className="li-1">Pre-owned</li>
        <li className="li-1">For the drivers</li>
      </ul>
    </nav>

    <h3 className="logo">logo</h3>
    <nav>
      <ul className="nav-links-2">
        <li className="li-2">Test Drive</li>
        <li className="li-2">Dealers</li>
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
