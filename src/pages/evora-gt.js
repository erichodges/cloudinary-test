import Image from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/evora.css"

const evora = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="evoraGTHeaderImage">
      <Image fluid={data.evoraGT.cloudinary.fluid} />
    </div>
    <div className="evoraGTSubmenu"></div>
    <div className="main">
      <h4 className="heading area-A">Uniquely brilliant</h4>
      <p className="area-A body-text">
        <br />
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
        <Image
          className="objectFit"
          fluid={data.evoraGTBack.cloudinary.fluid}
        />
      </div>

      <br />
      <div className="area-C" style={{ width: "100%" }}>
        <Image
          className="objectFit"
          fluid={data.evoraGTWheel.cloudinary.fluid}
        />
      </div>
      <h4 className="heading area-D">Handling masterclass</h4>
      <p className="area-D body-text">
        <br />
        <br />
        <br />
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
        <Image
          className="objectFit"
          fluid={data.evoraGTInterior.cloudinary.fluid}
        />
      </div>
      <h4 className="heading area-E">Versatility</h4>
      <p className="area-E body-text">
        <br />
        <br />
        <br />
        Available as both a 2+0 or 2+2, with a choice of 6-speed manual or
        paddleshift automatic transmissions, a wide range of options allows you
        to specify your car for enhanced GT comfort or greater track focus. A
        race suspension package is available, from your local dealer, featuring
        Öhlins TTX 2-Way Adjustable Dampers, transforming the car for hard track
        use. Optional ‘J’ hook brake discs improve the initial brake response
        and pad de-glazing.
        <br />
        <br />
        The cabin includes beautifully detailed carbon backed sports seats,
        carbon topped instrument binnacle and carbon fibre sill trims. The
        steering wheel, dashboard, door panels, transmission tunnel and centre
        console are all trimmed in black Alcantara® and perforated leather,
        complemented by contrast twin colour stitching. An integrated 7”
        touch-screen infotainment system with Apple CarPlay and Android Auto,
        Bluetooth® functionality, satellite navigation and reversing camera also
        comes as standard.
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
