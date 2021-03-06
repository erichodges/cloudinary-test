import { Link } from 'gatsby';
import React from 'react';
import LotusLogo from '../images/lotus-logo.svg';
import '../styles/header.css';

const Header = ({ data }) => (
  <header>
    <ul className="menu-items">
      <li className="Img">
        <Link to="/">
          <img src={LotusLogo} alt="Lotus logo" width="60px" height="60px" />
        </Link>
      </li>
      <Link to="/evija">
        <li className="menu">Evija</li>
      </Link>
      <Link to="/evora-gt">
        <li className="menu">Evora GT</li>
      </Link>
      <li className="menu">For the drivers</li>

      <li className="menu">Test Drive</li>
      <li className="menu">Dealers</li>
    </ul>
  </header>
);

export const fluidImage = graphql`
  fragment fluidImage on File {
    cloudinary: childCloudinaryAsset {
      fluid(maxWidth: 1920) {
        ...CloudinaryAssetFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    logo: file(name: { eq: "lotus-logo" }) {
      ...fluidImage
    }
  }
`;

export default Header;
