import { configureStore } from '@reduxjs/toolkit';
import userListReducer from './reducers/userListReducer';

const store = configureStore({
  reducer: {
    user: userListReducer,
    // Add more reducers here if needed
  },
});

export default store;
