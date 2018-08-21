import React, { Component } from "react";
const MultiParllaxImage = require("./components/multiParllaxImage");
const ParllaxText = require("./components/parllaxText");
import SmoothParallax from "smooth-parallax";

class ParllaxImageText extends Component {
  constructor(props) {
    super(props);
    //init the SmoothParallax and wait 2sec to react component to load.
    setTimeout(
      window.addEventListener("load", function() {
        SmoothParallax.init({ basePercentageOn: "pageScroll" });
      }),
      2000
    );
  }

  render() {
    const {
      title,
      subtitle,
      mainImage,
      subImageOne,
      subImageTwo,
      aboutName,
      aboutContent
    } = this.props;

    return (
      <section className="parallax-image paddingTop60">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <MultiParllaxImage
                mainImage={mainImage}
                subImageOne={subImageOne}
                subImageTwo={subImageTwo}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <ParllaxText
                aboutTitle={title}
                subTitle={subtitle}
                aboutContent={aboutContent}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ParllaxImageText.defaultProps = {
  title: "",
  subtitle: "",
  mainImage: "",
  subImageOne: "",
  subImageTwo: "",
  aboutName: "",
  aboutContent: ""
};

module.exports = ParllaxImageText;
