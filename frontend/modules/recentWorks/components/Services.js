import React, {Component} from "react";
const ServiceItem = require('./serviceItem.js');

class Services extends Component {

    constructor(props) {
        super(props);
        const {getDefaultWorks} = props;
        getDefaultWorks();
    }

    renderRecentWorkList() {
        const {recentWorkList: {
                recentWorks
            }} = this.props;
        return recentWorks.map((recentWork, key) => <ServiceItem recentWork={recentWork} key={key}/>);
    }

    render() {
        const {title, subTitle} = this.props;
        const flexStyle = {
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'stretch',
            justifyContent: 'center',
        }
        return (
            <div>
                <div className="container services-container">
                    <div className="row section--header">
                        <h1>{title}</h1> 
                    </div>
                    <div className='row service-box' style={flexStyle}>
                        {this.renderRecentWorkList()}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Services;
