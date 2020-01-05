import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/evora.css"

// const CarImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       image: file(name: { eq: "evora-gt-front" }) {
//         cloudinary: childCloudinaryAsset {
//           fluid(maxWidth: 1920) {
//             ...CloudinaryAssetFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Image fluid={data.image.cloudinary.fluid} alt="car image" />
// }

const evora = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <header>
      <Image fluid={data.evoraGT.cloudinary.fluid} />
    </header>

    <div className="main">
      <h4 className="heading-A">Uniquely brilliant</h4>

      <p className="text-2">
        <br />
        <br />
        The stunning new Evora GT takes the Evora’s unique attributes to
        spectacular new heights. Sports car agility, precision and response
        meets GT car refinement and comfort like never before.
        <br />
        <br />
        First and foremost a pure driver’s car for the road, the Evora GT proves
        that the value of motorsport engineering extends far beyond the race
        track. Its functional aerodynamics, bonded aluminium chassis, Bilstein
        dampers and spring set-up intelligently applied for road use. As a
        result, focused driving is effortless with precise, intuitive steering
        allied to huge reserves of mechanical grip, agility and poise. As the
        twisting tarmac disappears beneath you, the Evora flows, settling into a
        rhythm, smoothing out rough surfaces, breathing with the road for an
        enthralling, immersive driving experience.
      </p>

      <Image
        className={`${"area - B"}`}
        fluid={data.evoraGTBack.cloudinary.fluid}
      />

      <br />
      <Image
        className={`${"area - C"}`}
        fluid={data.evoraGTWheel.cloudinary.fluid}
      />
    </div>
    <div></div>
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
    evoraGT: file(name: { eq: "evora-gt-front" }) {
      ...fluidImage
    }
    evoraGTBack: file(name: { eq: "evoraGT-back-square" }) {
      ...fluidImage
    }
    evoraGTWheel: file(name: { eq: "evoraGT-wheel" }) {
      ...fluidImage
    }
  }
`

export default evora
