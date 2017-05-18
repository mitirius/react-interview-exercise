import * as types from '../constants/ActionTypes';

export function addFriend(name, gender) {
  return {
    type: types.ADD_FRIEND,
    name,
    gender
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function nextFriend(list) {
  return {
    type: types.NEXT_FRIENDS,
    count: types.INC_COUNT,
    list
  };
}

export function prevFriend() {
  return {
    type: types.PREV_FRIENDS,
    count: types.INC_COUNT
  };
}