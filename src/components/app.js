import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCnlNCj9EKnooQaIjCShv8Pjs0X8qO3Vzw';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('triumph tiger 800 xca');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }));
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelected={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

export default App;
