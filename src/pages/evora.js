import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/evora.css"

const evora = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <header>
      <Image fluid={data.evoraGT.cloudinary.fluid} />
    </header>

    <div className="main">
      <h4 className="heading-A">Uniquely brilliant</h4>

      <p className="area-A">
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
      <div className="area-B" style={{ width: "100%" }}>
        <Image fluid={data.evoraGTBack.cloudinary.fluid} />
      </div>

      <br />
      <div className="area-C" style={{ width: "100%" }}>
        <Image fluid={data.evoraGTWheel.cloudinary.fluid} />
      </div>
      <h4 className="heading-D">Handling masterclass</h4>
      <p className="area-D">
        Whatever the road throws at you, whether it’s a sweeping curve,
        challenging hairpin or undulating straight, the Evora demonstrates
        complete mastery over them all. An elegant, low-drag, fastback design
        combines fluid lines and a swept-forward cabin with an athletic stance
        and distinctive presence. The meticulously weighted, hydraulic power
        steering remains an industry benchmark. A tactile delight, it displays
        total fluency on the road, transmitting authentic feedback directly to
        the driver while filtering out unwanted noise, keeping you uniquely
        connected to the road.
      </p>
      <div className="area-F" style={{ width: "100%" }}>
        <Image fluid={data.evoraGTInterior.cloudinary.fluid} />
      </div>
      {/* <h4 className="heading-D">Handling masterclass</h4> */}
      <p className="area-E">
        Whatever the road throws at you, whether it’s a sweeping curve,
        challenging hairpin or undulating straight, the Evora demonstrates
        complete mastery over them all. An elegant, low-drag, fastback design
        combines fluid lines and a swept-forward cabin with an athletic stance
        and distinctive presence. The meticulously weighted, hydraulic power
        steering remains an industry benchmark. A tactile delight, it displays
        total fluency on the road, transmitting authentic feedback directly to
        the driver while filtering out unwanted noise, keeping you uniquely
        connected to the road.
      </p>
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
    evoraGT: file(name: { eq: "evora-gt-front" }) {
      ...fluidImage
    }
    evoraGTBack: file(name: { eq: "evoraGT-back-square" }) {
      ...fluidImage
    }
    evoraGTWheel: file(name: { eq: "evoraGT-wheel" }) {
      ...fluidImage
    }
    evoraGTInterior: file(name: { eq: "evoraGT-Interior" }) {
      ...fluidImage
    }
  }
`

export default evora
