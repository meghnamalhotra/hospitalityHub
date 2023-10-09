import thunk from 'redux-thunk';
import {counterReducer} from './reducer';
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
