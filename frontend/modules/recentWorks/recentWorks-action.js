const { get } = require('utils/ajax.js');
const {
    GET_MY_RECENT_WORKS,
    GET_MORE_OF_MY_RECENT_WORKS,
} = require('./constants.js');


function getDefaultWorks() {
    const queryParams = {
        url: '/wp-json/wp/v2/posts/?filter[categories]=recent-works',
    };
    return (dispatch) => get(queryParams).then((res) => {
        dispatch(setDefaultRecentWorks(res.data));
    });
}

function setDefaultRecentWorks(items) {
    return {
        type: GET_MY_RECENT_WORKS,
        recentWorkList: items,
    };
}

module.exports = {
    setDefaultRecentWorks,
    getDefaultWorks,
}