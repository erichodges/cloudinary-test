import { graphql } from 'gatsby'
import React from 'react'
import logo from '../../static/evija-logo-1560-white.gif'
import BgImage from '../components/BgImage'
import Layout from '../components/layout'
import SEO from '../components/seo'

const styles = {
  width: '400px',
  marginTop: '50rem',
}

const Index = ({ data }) => (
  <Layout>
    <BgImage title='car' fluid={data.image.cloudinary.fluid} overlayColor=''>
      <img style={styles} src={logo} alt='evija logo' />
    </BgImage>
    <div>
      <SEO title='Page two' />
      <h1>Home page</h1>
      <p>Welcome</p>
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
