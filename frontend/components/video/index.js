import React, {Component} from "react";

class Video extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            videoMp4, 
            height, 
            width,
            autoPlay,
            controls,
            loop,
            muted,
        } = this.props;
 
        return (
            <video
            height={height} 
            width={width} 
            autoPlay={autoPlay} 
            loop={loop} 
            muted={muted}
            controls={controls}
            > 
                <source src={videoMp4} type='video/mp4'/>
                <source src='http://localhost/wp-content/uploads/2018/07/sample.webm' type='video/webm'/>
            </video>
        );
    }
}

Video.defaultProps = {
    height: '500',
    width: '1200',
    autoPlay: false,
    controls: false,
    loop: false,
    muted: false,
  };

module.exports = Video;