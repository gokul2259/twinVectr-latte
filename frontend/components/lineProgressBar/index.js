import React, {Component} from 'react';
import {Line} from 'rc-progress';

class LineProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            percent: 0,
         }
         this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.increase();
      }
    
      increase() {
        const percent = this.state.percent + .7;
        const {percentage} = this.props;
        if (percent >= percentage) {
          clearTimeout(this.tm);
          return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 10);
      }

    render() {
        const {children, strokeWidth, strokeColor, strokeLinecap, trailWidth } = this.props;
        return ( 
            <div>
            {children}
            <Line
                percent={this.state.percent}
                strokeWidth={strokeWidth}
                trailWidth={trailWidth}
                strokeColor={strokeColor}
                strokeLinecap={strokeLinecap}
            />
        </div>
        );
    }
}

export default LineProgressBar;