import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/evora.css"

const CarImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "evora-gt-front" }) {
        cloudinary: childCloudinaryAsset {
          fluid(maxWidth: 1920) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return <Image fluid={data.image.cloudinary.fluid} alt="car image" />
}

const evora = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <CarImage />
    </div>
    <h1>Evora GT</h1>

    <Link to="/">Index page</Link>
    <br />
  </Layout>
)

export default evora
