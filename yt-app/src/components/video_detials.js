import React from 'react';

const VideoDetails = ({video}) =>{
  if(!video){
    return (
      <div>Loading.....</div>
    );
  }
  console.log(video);
  let id = video.id.videoId;
  let url= `https://www.youtube.com/embed/${id}`;
  return (
    <div className = "col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div>
        <div><strong>{video.snippet.title}</strong></div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetails;
