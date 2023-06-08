import * as actionTypes from '../../actionTypes/actionTypes';

export const updateSearchResult = (result) => {
  return {
    type: actionTypes.UPDATE_SEARCH_RESULT,
    payload: result,
  };
};

export const resetSearchResult = () => {
  return {
    type: actionTypes.RESET_SEARCH_RESULT,
  };
};

export const navigateBack = () => {
  return {
    type: actionTypes.NAVIGATE_BACK,
    payload: -1,
  };
};

export const addUser = (newUser) => {
  return {
    type: actionTypes.ADD_USER,
    payload: newUser,
  };
};
export const clearSearchResult = () => ({
  type: 'CLEAR_SEARCH_RESULT',
});
