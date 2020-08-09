import React from 'react';
import ReactPlayer from 'react-player';
import './responsive-player.css';

const ResponsivePlayer = ({ url }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url={url}
      width="100%"
      height="100%"
      controls
      loop
      volume={0}
      playing
    />
  </div>
);

export default ResponsivePlayer;
