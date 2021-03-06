import _ from 'lodash'
import React, { Component } from 'react';
import YTSearch from "youtube-api-search";
import './App.css';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCbwLwNN-h4LUgIALLOY38_xaQj0Nq_i4Q";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: {
        id:{},
        snippet:{
          thumbnails:{
            default:{},
            details:{}
          }
        }
      }
    };    
  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }
  
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div className="App">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
        />
      </div>
    );
  }
}

export default App;
