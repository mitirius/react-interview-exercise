import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend, prevFriend, nextFriend } from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {

  render() {
    const {friendlist: {startIndex, friendsById}} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      nextFriend: this.props.nextFriend,
      prevFriend: this.props.prevFriend,
    };

    return (
      <div className={ styles.friendListApp }>
        <h1><span className="glyphicon glyphicon-menu-left" onClick={ actions.prevFriend } />The FriendList<span className="glyphicon glyphicon-menu-right" onClick={ actions.nextFriend } /></h1>
        <AddFriendInput addFriend={ actions.addFriend } />
        <FriendList friends={ friendsById } actions={ actions } startIndex={ startIndex } />
      </div>
      );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  prevFriend,
  nextFriend,
})(FriendListApp)