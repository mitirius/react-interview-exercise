import * as types from '../constants/ActionTypes';

const initialState = {
  startIndex: 0,
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            gender: action.gender,
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    case types.NEXT_FRIENDS: {
      const startIndex = state.startIndex + action.count;
      if (startIndex < state.friendsById.length) {
        return {
          ...state,
          startIndex
        }
      } else {
        return state;
      }
    }
    case types.PREV_FRIENDS: {
      const startIndex = state.startIndex - action.count;
      if (startIndex >= 0) {
        return {
          ...state,
          startIndex
        }
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}