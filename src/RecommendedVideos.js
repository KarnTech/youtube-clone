import React from "react";
import "./recommendedvideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = ({ recvideos }) => {
  console.log(recvideos);
  return (
    <div className="recommendedvideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {recvideos.map((video) => (
          <VideoCard
            title={video.snippet.localized.title}
            views="300m views"
            timestamp="30 days ago"
            channel={video.snippet.channelTitle}
            image={video.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedVideos;
