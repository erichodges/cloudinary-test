import { graphql } from 'gatsby';
import React from 'react';
import logo from '../../static/evija-logo-1560-white.gif';
import BgImage from '../components/BgImage';
import Layout from '../components/layout';

const styles = {
  width: '400px',
  marginTop: '45rem',
};

const Index = ({ data }) => (
  <Layout>
    <BgImage title="car" fluid={data.image.cloudinary.fluid} overlayColor="">
      <img style={styles} src={logo} alt="evija logo" />
    </BgImage>
  </Layout>
);

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
`;
export default Index;
