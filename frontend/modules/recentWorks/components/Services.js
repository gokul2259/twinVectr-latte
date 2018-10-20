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
        return (
            <div>
                <div className="container services-container">
                    <div className="row section--header">
                        <p>{title}</p> 
                    </div>
                    <div className='row service-box'>
                        {this.renderRecentWorkList()}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Services;
