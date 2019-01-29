import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import postReducer from './redux/post/reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(
  rootReducer,
  );

export default store;