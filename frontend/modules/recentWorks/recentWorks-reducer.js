const actionTypes = require('./constants');

const defaultState = {
    recentWorks: []
};

function recentWorksReducer(state = defaultState, action) {
  switch (action.type) {
        case actionTypes.GET_MY_RECENT_WORKS:
            {
                const {recentWorkList} = action;
                return {
                    ...state,
                    recentWorks: recentWorkList,
                };
            }
        case actionTypes.GET_MORE_OF_MY_RECENT_WORKS:
            {
              return {
                ...state,
                text: "",
              };
            }
        default:
            return state;
    }
}

module.exports = recentWorksReducer;
