import React, { Component } from 'react';
import './video-grid.css';
import VideoRow from './components/video-row/video-row';
import videos from '../../data/videos';
require('smoothscroll-polyfill').polyfill();

class VideoGrid extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {rowIndex: 2};
    }

    loadMore = () => {
      const curRowIndex = this.state.rowIndex;
      this.setState({rowIndex: curRowIndex + 2});
      setTimeout(() => window.scrollBy({ top: 600, left: 0, behavior: 'smooth' }), 1000);
    };

    render() {
        let videoRows = [];
        for (let i = 1; i <= videos.length; i += 2) {
            const video1 = videos[i - 1];
            const video2 = videos[i];
            videoRows.push((
                <VideoRow video1={video1} video2={video2}/>
            ));
        }

        return (
            <div class="row">
                <div class="col-lg-offset-1 col-lg-10">
                    {videoRows.slice(0, this.state.rowIndex)}
                    <div class="row">
                        {videoRows.length > this.state.rowIndex &&
                            <div class="load-more-button-container col-xs-12">
                                <button class="load-more-button" onClick={() => this.loadMore()}>Load More</button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default VideoGrid;