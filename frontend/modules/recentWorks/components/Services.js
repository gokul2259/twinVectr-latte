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
                    <div className="row">
                        <header data-sr="ease-in-out wait 0.25s" className="services-header">
                            <h2>{title}</h2>
                            <h3>{subTitle}</h3>
                        </header>
                    </div>
                    <div className='row' style={flexStyle}>
                        {this.renderRecentWorkList()}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Services;
