import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {

  state = {firstIndex: 0}
  
render() {
     const friends = this.props.friends.slice(this.state.firstIndex, 100);

    return (
      <ul className={styles.friendList}>
        {
          friends.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                gender={friend.gender}           
                starred={friend.starred}
                {...this.props.actions} />
            );
          })
        }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
