import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ListRecentWorks from "./components/ListRecentWorks.js";

const mapStateToProps = (state, ownProps) => {
    return {
        recentWorkList : state.recentWorkList,
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return();
// };

const RecentWorkApp = connect(mapStateToProps)(ListRecentWorks);

module.exports = RecentWorkApp;
