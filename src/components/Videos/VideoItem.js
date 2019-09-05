import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div key={video.id.videoId}>
			<img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
			<div>
				<div>{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
