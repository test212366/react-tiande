import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
// COMBINED REDUCERS
const reducers = { counterReducer };

export default combineReducers(reducers);
