import React, {Component} from "react";

class ListRecentWorks extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, subTitle} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <header data-sr="ease-in-out wait 0.25s" className="services-header">
                            <h2>{title}</h2>
                            <h3>{subTitle}</h3>
                        </header>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = ListRecentWorks;
