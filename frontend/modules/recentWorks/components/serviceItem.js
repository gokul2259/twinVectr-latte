import React from 'react'
import {Card, Icon} from 'semantic-ui-react'

const ServiceItem = (props) => {
    const {recentWork} = props;
    const {title, content} = recentWork;
    const {featuredImage, recentWorkURL} = recentWork.postMeta;
    const extra = (
        <a href={recentWorkURL && recentWorkURL[0]}>
            <Icon name='eye'/>
            <span>
                View site
            </span>
        </a>
    );
    const cardExtraStyle = {
        marginBottom: '20px',
    }
    return (
        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3' style={cardExtraStyle}>
            <Card
                image={featuredImage}
                header={title.rendered}
                description={content}
                extra={extra}
                raised
                centered
                />
        </div>
    );
}

ServiceItem.defaultProps = {
    featuredImage: '',
    recentWorkURL: []
};

module.exports = ServiceItem;
