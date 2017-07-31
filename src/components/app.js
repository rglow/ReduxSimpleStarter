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

    YTSearch({key: API_KEY, term: 'triumph tiger 800 xca'}, (videos) => this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }));
  }

  render() {
    return (
      <div>
        <SearchBar />
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
