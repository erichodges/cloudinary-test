import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

const CarImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "car" }) {
        cloudinary: childCloudinaryAsset {
          fluid(maxWidth: 1920) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data.image.cloudinary.fluid} alt="car image" />;
};

export default CarImage;
