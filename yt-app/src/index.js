import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detials';

const api_key = "AIzaSyC7Qt9LlV39VamZvG35p9wmYPgmTaafhnY";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: []
    };

    this.onVideoSearch('Reactjs');
    }

    onVideoSearch(term){
      console.log(term);
      YTSearch({key: api_key, term: term}, (videos) => {
          //console.log(data);
          this.setState({
              videos: videos,
              selectedVideo: videos[0]
             });
          });
    }


  render(){
    const videoSearch = _.debounce((term) => {this.onVideoSearch(term)}, 300);
    return(
      <div>
        <SearchBar onVideoSearch = {videoSearch}/>
        <VideoDetails video = {this.state.selectedVideo} />
        <VideoList
        onVideoSelected = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
