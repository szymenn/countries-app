import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, compose(middleware,  window.devToolsExtension ? window.devToolsExtension() : f => f));

export default store