import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBoxy0nJ2SCh91zD419Ffam-Vc2-D_M9Y0';



//Create a new component .THis component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    //console.log(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Hare Krishna');
  };

  videoSearch(term) {

    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
     // console.log(data);
    })

  }



  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div >
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )
  }
}

//Putting in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));