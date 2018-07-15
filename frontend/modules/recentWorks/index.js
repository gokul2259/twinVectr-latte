const { bindActionCreators } = require("redux");
const { connect } = require("react-redux");
const ListRecentWorks = require("./components/ListRecentWorks.js");

const mapStateToProps = (state, ownProps) => {
    return {
        recentWorkList : state.recentWorkList,
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return();
// };

module.exports = connect(mapStateToProps)(ListRecentWorks);
