import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './video-displayer.css';

class VideoDisplyer extends Component {
    render() {
        const { video, otherTitle, isHovering } = this.props;

        return (
            <div class="video-displayer">
                {otherTitle &&
                    <div style={{display: isHovering ? 'flex' : 'none'}} class="video-title-container">
                        <h4 class="video-title animated fadeInUp">{otherTitle}</h4>
                    </div>
                }
                {video &&
                    <div>
                        <ReactPlayer width={480} height={360} url={video.url}/>
                    </div>
                }


            </div>
        );
    }
}

export default VideoDisplyer;