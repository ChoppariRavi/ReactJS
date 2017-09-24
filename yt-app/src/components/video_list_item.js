import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {
  //console.log(video);
  let imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick = {() => onVideoSelected(video)} className="list-group-item">
    <div className="media">
      <div className="media-left">
        <img src={imgUrl} className="media-object"/>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{video.snippet.title}</h4>
      </div>
    </div>
    </li>
  );
}

export default VideoListItem;
