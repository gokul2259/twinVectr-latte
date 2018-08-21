import React, { Component } from "react";

class ParllaxText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { aboutTitle, aboutContent, subTitle } = this.props;
    return (
      <div
        smooth-parallax=""
        start-movement="0.05"
        end-movement="1"
        end-position-y="-.6"
        className="parllax-text-container"
      >
        <div
          smooth-parallax=""
          start-movement="0.05"
          end-movement="1"
          start-position-x=".2"
          end-position-x="-.1"
        >
          <h2 className="parllax-text-title">{aboutTitle}</h2>
        </div>
        <div
          smooth-parallax=""
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
