const _ = require('lodash');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { combineReducers, createStore } = require('redux');

function isReactReduxsetup() {
  return window.store;
}

function setupInitialStore() {
  window.store = configureStore();
}

function createReducer() {
  const reducers = Object.assign({}, {
    initial: {},
  });
  return combineReducers(reducers);
}

function configureStore() {
  intialState = {};
  const store = createStore(createReducer({}), intialState);
  return store;
}

function initPage(reactElementNodeIds = {}) {
  if(isReactReduxsetup()) {
    window.isReactReduxSettingUp = false;
    return new Promise((resolve)=> {
      renderEverything(reactElementNodeIds);
      resolve();
    });
  } else if (window.isReactReduxSettingUp) {
    setTimeout(() => initPage(reactElementNodeIds), 10);
  } else {
    window.isReactReduxSettingUp = true;
    return new Promise((resolve)=> {
      setupInitialStore();
      resolve();
    }).then(() => renderEverything(reactElementNodeIds));
  }
}

function renderEverything(reactElementNodeIds) {
  const { store } = window;

  renderReactElementsToNodeByIds(reactElementNodeIds, store)
}

function renderReactElementsToNodeByIds(elementByNodeIds, store) {
 _.each(elementByNodeIds, (ReactComponent, destinationId) => renderReactElementToNodeById(
   ReactComponent, destinationId, store
 ));
}


function renderReactElementToNodeById(ReactComponent, destinationNodeId, store) {
  const destinationNode = document.getElementById(destinationNodeId);
  if(destinationNodeId === null) {
    return null;
  }

  renderReactElementToNode(ReactComponent, destinationNode, store)
}

function renderReactElementToNode(ReactComponent, destinationNode, store) {

  if(!destinationNode) {
    return null;
  }

  ReactDOM.render(
    <Provider store={store}>
     <ReactComponent />
    </Provider>, destinationNode );
}
