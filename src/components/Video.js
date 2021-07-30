import React from "react";
const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  let sourceUrl = videoSrcURL.replace("/watch?v=", "/embed/");
  return (
    <div className="video">
      <iframe
        src={sourceUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};
export default Video;
