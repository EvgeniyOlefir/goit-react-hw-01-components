import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
