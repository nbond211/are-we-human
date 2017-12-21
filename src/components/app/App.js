import React, { Component } from 'react';
import './App.css';
import TitleSection from '../title-section/title-section';
import VideoGrid from '../video-grid/video-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TitleSection/>
          <VideoGrid/>
      </div>
    );
  }
}

export default App;
