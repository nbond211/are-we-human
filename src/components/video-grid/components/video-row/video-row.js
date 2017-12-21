import React, { Component } from 'react';
import './video-row.css';
import VideoDisplayer from '../video-displayer/video-displayer';

class VideoRow extends Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {mouseOver1: false, mouseOver2: false};
    }

    mouseOver1 = () => {
      this.setState({mouseOver1: true});
    };

    mouseOut1 = () => {
        this.setState({mouseOver1: false});
    };

    mouseOver2 = () => {
        this.setState({mouseOver2: true});
    };

    mouseOut2 = () => {
        this.setState({mouseOver2: false});
    };

    render() {
        const { video1, video2 } = this.props;
        const { mouseOver1, mouseOver2 } = this.state;

        return (
            <div class="video-row row">
                <div class="col-xs-6 video-displayer-container">
                    <div onMouseOver={() => this.mouseOver1()} onMouseOut={() => this.mouseOut1()}>
                        <VideoDisplayer otherTitle={video2 ? video2.title: undefined} video={video1} isHovering={mouseOver2}/>
                    </div>
                </div>
                <div class="col-xs-6 video-displayer-container">
                    <div onMouseOver={() => this.mouseOver2()} onMouseOut={() => this.mouseOut2()}>
                        <VideoDisplayer otherTitle={video1.title} video={video2 ? video2 : undefined} isHovering={mouseOver1}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoRow;