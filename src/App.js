// Create a new Component . This component should produce 
// some HtML
import _ from 'lodash';
import React , {Component} from 'react';
import './style.css';

import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='AIzaSyD9t3zKbyYHzDHgYnK74Jn_-PYLm6Zh5EI';

class App extends Component {
   constructor(props)
   {
     super(props);
     
     this.state={
       videos:[],
       selectedVideo:null
     };
     this.videoSearch('Indian Cricket Videos');
    }

   videoSearch(term){
    YTsearch({key:API_KEY, term:term},(videos) => {
      // console.log(videos);
       this.setState({
         videos:videos,
         selectedVideo:videos[0]
       });
       // this.setState({videos:videos})
     });

   }

   render(){
     const videoSearch=_.debounce((term)=> {this.videoSearch(term)},300);
    return (<div>
      <SearchBar
       onSearchTermChange={ videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList 
      onVideoSelect={ selectedVideo => this.setState({selectedVideo:selectedVideo })}
      videos={this.state.videos} />
    </div>
    );
  }
}

//Take this component's generated HTML and put it
// on the page(in the DOM)




export default App;
