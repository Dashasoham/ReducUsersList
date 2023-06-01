import * as actionTypes from '../../actionTypes/actionTypes';

const initialState = {
  list: [], // Initial empty array for users
  searchResult: null,
  navigation: null,
  userList: [],
  // navigation: {
  //   navigate: jest.fn(),
  //   goBack: jest.fn(),
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_RESULT:
      // handle update search result action
      return {
        ...state,
        list: action.payload,
        // update state with search result
      };
    case actionTypes.RESET_SEARCH_RESULT:
      // handle reset search result action
      return {
        ...state,
        // reset search result in state
      };
    case actionTypes.NAVIGATE_BACK:
      // handle navigate back action
      return {
        ...state,
        navigation: action.payload,

        // update state for navigation
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case 'CLEAR_SEARCH_RESULT':
      return {
        ...state,
        searchResult: null,
      };

    default:
      return state;
  }
};

export default userListReducer;
