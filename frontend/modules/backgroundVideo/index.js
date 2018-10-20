
import React, {Component} from "react";
const Video = require('components/video');

class BGVideo extends Component {

    constructor(props) {
        super(props);  
    }

    render() {
        const { videoMp4, blogInfo, blogDesciption, scrollTarget, bgImage, windowSize } = this.props;
        return (
                <Video 
                    videoMp4 = {videoMp4}
                    bgImage = {bgImage}
                    taglinehead = {blogInfo}
                    taglineSubhead = {blogDesciption}
                    scrollTarget = {scrollTarget}
                    windowSize = {windowSize}
                    height = '600'
                    width = '1200'
                    autoPlay
                    loop
                    muted
                />
        );
    }
}

BGVideo.defaultProps = {
    videoMp4: '',
    blogInfo: '',
    blogDesciption: '',
    scrollTarget: '',
}

module.exports = BGVideo;
