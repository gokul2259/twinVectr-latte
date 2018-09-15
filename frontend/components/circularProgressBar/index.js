import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class CircularProgressBar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {percentage, strokeColor, children, strokeValue} = this.props;
        return (
            <div className="circular-progress-container textCenter">
                <CircularProgressbar
                    percentage={percentage}
                    text={`${percentage}%`}
                    strokeWidth={5}
                    initialAnimation
                    styles={{
                        path: { stroke: `${strokeColor}`, transition: `stroke-dashoffset .5s ease ${strokeValue/5}s` },
                        trail: {stroke: 'transparent'},
                        text: { fill: '#f88', fontSize: '16px' },
                      }}
                />
                <div>{children}</div>
            </div> 
            
         );
    }
}
 
export default CircularProgressBar;