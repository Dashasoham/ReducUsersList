import { combineReducers } from 'redux';
import userListReducer from './userListReducer';

const rootReducer = combineReducers({
  user: userListReducer,
  // Add more reducers here if needed
});

export default rootReducer;
