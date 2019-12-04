import React from "react"
import "./VideoPlayer.css"

const VideoPlayer = () => {
  return (
    <>
      {/* Cloudinary Video Player embed code */}
      <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=dn3baky3u&public_id=gatsby-cloudinary%2Fevija-dynamic-1-cut-1920&fluid=true&controls=false&muted=true&poster_options%5Btransformation%5D%5Bstart_offset%5D=0&autoplay=true&autoplay_on_scroll=false&loop=true&source_types%5B0%5D=mp4"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; loop"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </>
  )
}

export default VideoPlayer
