import FriendListItem from './FriendListItem';
import css from'./FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendsList}>
	        {friends.map(friend => (
                <li key={friend.id} className={css.friendsListItem}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;