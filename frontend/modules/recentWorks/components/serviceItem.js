import React, {Component} from "react";
class ServiceItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {recentWork} = this.props;
        const {title} = recentWork;
        const {featuredImage, recentWorkURL} = recentWork.postMeta;

        const boxStyle = {
            height: '310px',
            width: '400px'
        };
        return (
            <div>
                <div className="col-md_12">
                    <div
                        data-sr="ease-in-out wait 0.25s"
                        className="col-md-4 col-sm-6 text-center service-box">
                        <div className="service-item">
                            <div className="service-icon">
                                <a href={recentWorkURL[0]}>
                                    <i className="fa">
                                        <img src={featuredImage} style={boxStyle}/>
                                    </i>
                                    <h3>
                                        {title.rendered}
                                    </h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ServiceItem;
