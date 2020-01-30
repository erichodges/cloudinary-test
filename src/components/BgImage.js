// https://markoskon.com/gatsby-background-image-example/
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Parent = styled.div`
  position: relative;
  display: block;
  background-color: ${({ bc }) => bc};
  vertical-align: top;
  text-align: center;
`

const FakeBgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  z-index: -10;

  & > img {
    object-fit: cover !important;
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
    width: 100vw;
  }
`

const Content = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 20;

  @media screen and (max-width: 500px) {
    top: 47vh;
    font-size: 2rem !important;
  }
`

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
  <Parent bc={overlayColor}>
    <FakeBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Parent>
)

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
}

export default BgImage
