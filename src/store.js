import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import postReducer from './redux/post/reducer';
import profileReducer from './redux/profile/reducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  post: postReducer,
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
  );

export default store;