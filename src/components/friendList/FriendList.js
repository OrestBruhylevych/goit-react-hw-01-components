
import PropTypes from 'prop-types';

import FriendListItem from "components/friendListItem/FriendListItem";

export default function FriendList({friends}) {

    const friendsItem = friends.map(({ avatar, name, isOnline, id }) => {
        return (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
    })


    return (
        <ul className="friend-list">
                {friendsItem}
        </ul>
    );

};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
}
