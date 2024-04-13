import React from "react";
import "../../styles/Home/video.css";

function YTVideo() {
  // const videoUrl = Saburi_video;
  return (
    <>
      <div className="video-container">
        {/* <video controls width="100%" height="auto" autoPlay={true}>
            <source src={Saburi_video} type="video/mp4"  />
            Your browser does not support the video tag.
          </video> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XYZKRgMv_kg?si=A72ZQme-njeOSrgg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="yout_video_iframe"
        ></iframe>
      </div>
    </>
  );
}

export default YTVideo;
