import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import { INC_COUNT } from '../constants/ActionTypes'


class FriendList extends Component {

    render() {
        const startIndex = this.props.startIndex;
        const friends = this.props.friends.slice(startIndex, startIndex + INC_COUNT);

        return (
            <ul className={ styles.friendList }>
              { friends.map((friend, index) => {
                    return (
                        <FriendListItem key={ index } id={ index } name={ friend.name } gender={ friend.gender } starred={ friend.starred } {...this.props.actions}
                        />
                        );
                }) }
            </ul>
            );
    }

}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default FriendList;