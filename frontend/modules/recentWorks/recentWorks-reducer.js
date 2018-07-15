const defaultState = {
  recentWorks: [],
};

function recentWorksAction(state = defaultState, action) {
  switch(action.type) {
    case 1:
    case 2:
    default:
    return state;
  }
}

module.exports = { recentWorksAction };
