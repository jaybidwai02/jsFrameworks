import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk, logger)

export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware)