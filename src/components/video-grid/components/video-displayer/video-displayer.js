import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './video-displayer.css';

class VideoDisplyer extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = { isPlaying: false, mouseOver: false };
    }

    mouseOver = () => {
        this.setState({mouseOver: true});
    };

    mouseOut = () => {
        this.setState({mouseOver: false});
    };

    playVideo = () => {
        this.setState({isPlaying: true});
    };

    stopVideo = () => {
        this.setState({isPlaying: false});
    };

    render() {
        const { video } = this.props;

        return (
            <div
                class="video-displayer col-xs-6"
                onMouseOver={() => this.mouseOver()}
                onMouseOut={() => this.mouseOut()}
            >
                {video &&
                    <div style={{display: this.state.mouseOver && !this.state.isPlaying ? 'flex' : 'none'}} class="video-title-container">
                        <h4 class="video-title animated fadeInUp">
                            {video.title}
                            <br/>
                            <span onClick={() => this.playVideo()} class="play-video">Play Video</span>
                        </h4>

                    </div>
                }
                {video &&
                    <div>
                        <ReactPlayer
                            playing={this.state.isPlaying}
                            width={480}
                            height={360}
                            url={video.url}
                            onStart={() => this.playVideo()}
                            onPlay={() => this.playVideo()}
                            onPause={() => this.stopVideo()}
                            onEnded={() => this.stopVideo()}
                        />
                    </div>
                }


            </div>
        );
    }
}

export default VideoDisplyer;