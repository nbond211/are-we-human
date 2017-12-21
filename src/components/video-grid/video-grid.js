import React, { Component } from 'react';
import './video-grid.css';
import VideoDisplayer from './components/video-displayer/video-displayer';
import videos from '../../data/videos';
require('smoothscroll-polyfill').polyfill();

class VideoGrid extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {index: 4};
    }

    loadMore = () => {
      const curIndex = this.state.index;
      this.setState({index: curIndex + 4});
      setTimeout(() => window.scrollBy({ top: 600, left: 0, behavior: 'smooth' }), 1000);
    };

    render() {
        const videoDisplayers = videos.map(video => {
           return (
               <VideoDisplayer video={video}/>
           )
        });

        return (
            <div class="row">
                <div class="col-lg-offset-1 col-lg-10">
                    <div class="row">
                        {videoDisplayers.slice(0, this.state.index)}
                        {videoDisplayers.length > this.state.index &&
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