import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {  
  const notSelectedVideos = (video) => {
    return video.etag !== props.selectedVideo.etag;
  }
  const videoItems = props.videos.filter(notSelectedVideos)
    .map(video => {
      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });  

  return (
    <ul className="col-md-4 list-group">
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={props.selectedVideo.etag}
      video={props.selectedVideo}
    />
    {videoItems}      
    </ul>
  );
};

export default VideoList;
