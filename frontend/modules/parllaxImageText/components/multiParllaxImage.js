import React, { Component } from "react";

class MultiParllaxImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mainImage, subImageOne, subImageTwo } = this.props;

    return (
      <div className="multi-parllax-images">
        <img className="multi-parllax-image-main" src={mainImage} />
        <img
          smooth-parallax=""
          start-movement="0.05"
          end-movement="1"
          end-position-y="-0.4"
          end-position-x="-0.4"
          className="multi-parllax-image-one"
          src={subImageOne}
        />
        <img
          smooth-parallax=""
          start-movement="0.05"
          end-movement="1"
          end-position-y="0.4"
          end-position-x="0.4"
          className="multi-parllax-image-two"
          src={subImageTwo}
        />
      </div>
    );
  }
}

MultiParllaxImage.defaultProps = {
  mainImage: "",
  subImageOne: "",
  subImageTwo: ""
};

module.exports = MultiParllaxImage;
