import React, { Component } from "react";
import constants from 'utils/constants';

class ParllaxText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSmoothParallaxEnabled: props.windowSize > constants.WINDOWS_MEDIUM,
    }
  }

  render() {
    const { aboutTitle, aboutContent, subTitle } = this.props;
    const smoothParallax = this.state.isSmoothParallaxEnabled ? {
      ['smooth-parallax']: ''
    } : {};

    return (
      <div className="parllax-text-container">
        <div
          {...smoothParallax}
          start-movement="0.05"
          end-movement="1"
          start-position-x=".2"
          end-position-x="-.1"
        >
          <h2 className="parllax-text-title">{aboutTitle}</h2>
        </div>
        <div
          {...smoothParallax}
          start-movement="0.05"
          end-movement="1"
          start-position-x=".2"
          end-position-x="-.2"
        >
          <p className="parllax-text-name">{subTitle}</p>
        </div>
        <p className="parllax-text-content">{aboutContent}</p>
      </div>
    );
  }
}

ParllaxText.defaultProps = {
  aboutName: "",
  aboutContent: ""
};

module.exports = ParllaxText;
