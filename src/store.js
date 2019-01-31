import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import postReducer from './redux/post/reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
  );

export default store;