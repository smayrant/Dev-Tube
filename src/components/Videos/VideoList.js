import React from "react";
import VideoItem from "./VideoItem";
import "../../styles/homepage-styles/_base-homepage-styles.scss";

const VideoList = ({ videos }) => {
	return (
		<div className="homepage-video-container">
			{videos.map(video => {
				return <VideoItem key={video.id.videoId} video={video} />;
			})}
		</div>
	);
};

export default VideoList;
