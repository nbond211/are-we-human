import React, { Component } from 'react';
import './video-grid.css';
import VideoRow from './components/video-row/video-row';
import videos from '../../data/videos';

class VideoGrid extends Component {
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
                <div class="col-xs-offset-2 col-xs-8">
                    {videoRows}
                </div>
            </div>
        );
    }
}

export default VideoGrid;