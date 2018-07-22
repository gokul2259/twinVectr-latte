import React, {Component} from "react";
const ServiceItem = require('./serviceItem.js');

class Services extends Component {

    constructor(props) {
        super(props);
        const { getDefaultWorks } = props;
        getDefaultWorks();
    }

    render() {
        const {title, subTitle} = this.props;
        return (
            <div>
                <div className="container services-container">
                    <div className="row">
                        <header data-sr="ease-in-out wait 0.25s" className="services-header">
                            <h2>{title}</h2>
                            <h3>{subTitle}</h3>
                        </header>
                    </div>
                    <ServiceItem />
                </div>
            </div>
        );
    }

}

module.exports = Services;
