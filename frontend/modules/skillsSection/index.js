import React, { Component } from "react";
import CircularProgressBar from "components/CircularProgressBar";
import LineProgressBar from "components/LineProgressBar";
import Image from "components/Image";

class SkillsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needToMount: false
    };

    this.handleScrollCalcualtion = this.handleScrollCalcualtion.bind(this);
    window.addEventListener("scroll", this.handleScrollCalcualtion);
  }

  handleScrollCalcualtion(event) {
    const skillElement = document.querySelector('[js-react-module="skillsSection"]').getBoundingClientRect();

    if (((skillElement.top + 20) <= document.documentElement.clientHeight) && !this.state.needToMount) {
      this.setState(prevState => {
        return {
          ...prevState,
          needToMount: true
        };
      });
    }
  }

  renderCircularSkills() {
    const { skillItems } = this.props;
    return Object.values(skillItems)
      .slice(0, 4)
      .map((item, key) => {
        const fadeStyle = {
          animationDuration: `${key / 10}s`,
          animationDelay: `${key / 5}s`
        };

        if (item.title) {
          return (
            <div
              className="col-xs-6 col-sm-6 marginBottom30 circular-bar-opacity"
              key={key}
              style={fadeStyle}
            >
              <CircularProgressBar
                percentage={item.percentage}
                strokeColor={item.barbackground}
                strokeValue={key}
              >
                <div className="marginTop10 section--text-bold">
                  <p>{item.title}</p>
                </div>
              </CircularProgressBar>
            </div>
          );
        }
      });
  }

  renderLineSkills() {
    const { skillItems } = this.props;
    const skillsLength = Object.values(skillItems).length;
    return Object.values(skillItems)
      .slice(4, skillsLength)
      .map((item, key) => {
        const fadeStyle = {
          animationDuration: `${key / 10}s`,
          animationDelay: `${key / 5}s`
        };

        if (item.title) {
          return (
            <div
              className="col-sm-12 linebar-skills-container circular-bar-opacity"
              key={key}
              style={fadeStyle}
            >
              <LineProgressBar
                percentage={item.percentage}
                strokeWidth="3"
                trailWidth="3"
                strokeColor={item.barbackground}
                strokeLinecap="square"
              >
                <div className="section--text-bold" style={{ width: "100%" }}>
                  <p style={{ float: "left" }}>{item.title}</p>
                  <p style={{ float: "right" }}>{item.percentage}%</p>
                </div>
              </LineProgressBar>
            </div>
          );
        }
      });
  }

  render() {
    const { sectionTitle } = this.props;
    const { needToMount } = this.state;
    return (
      <section className="skills-section" id="skills">
        <div className="container">
          <div className="row section--header">
            <p>{sectionTitle}</p>
          </div>
          <div className="row skills-items">
            <div className="skills-item-container col-xs-12 col-sm-6">
              {needToMount && this.renderCircularSkills()}
            </div>
            <div className="skills-item-container col-xs-12 col-sm-6">
              {needToMount && this.renderLineSkills()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;
