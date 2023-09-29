import {createStore, applyMiddleware, compose} from 'redux'
import rootreducer from "./reducer"
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootreducer,
    composeEnhancer(applyMiddleware(thunk))
)
export default store