
import React, {Component} from "react";
const Video = require('components/video');

class BGVideo extends Component {

    constructor(props) {
        super(props);  
    }

    render() {
        const { videoMp4, blogInfo, blogDesciption, scrollTarget } = this.props;
        return (
                <Video 
                    videoMp4 = {videoMp4}
                    taglinehead = {blogInfo}
                    taglineSubhead = {blogDesciption}
                    scrollTarget = {scrollTarget}
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
