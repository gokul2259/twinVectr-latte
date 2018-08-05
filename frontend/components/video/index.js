import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.handleScrollCalcualtion = this.handleScrollCalcualtion.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollCalcualtion);
  }

  handleScrollCalcualtion(event) {
    const vScrollTop = event.target.scrollingElement.scrollTop;
    const heroText = document.querySelector(".cover-container");
    heroText.style.transform = this.getScrollPosition(vScrollTop);
  }

  getScrollPosition(scrollTop) {
    return `translate(0px, ${scrollTop / 9}%)`;
  }

  render() {
    const {
      videoMp4,
      height,
      width,
      autoPlay,
      controls,
      loop,
      muted
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
        <source src={videoMp4} type="video/mp4" />
      </video>
    );
  }
}

Video.defaultProps = {
  height: "500",
  width: "1200",
  autoPlay: false,
  controls: false,
  loop: false,
  muted: false
};

module.exports = Video;
