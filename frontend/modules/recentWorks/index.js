const { bindActionCreators } = require("redux");
const { connect } = require("react-redux");
const Services = require("./components/services.js");
const recentWorkActions = require('./recentWorks-action');

function mapStateToProps(state, ownProps){           
    return {
        recentWorkList : state.recentWorks,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(recentWorkActions, dispatch);
};


module.exports = connect(mapStateToProps, mapDispatchToProps)(Services);
