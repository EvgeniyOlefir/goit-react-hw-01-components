import React from "react";
import PropTypes from "prop-types";

const User = ({ avatar, name, location, tag, statsFollowers, statsViews, statsLikes }) => (
  <div class="profile">
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity"> {statsFollowers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity"> {statsViews}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity"> {statsLikes}</span>
      </li>
    </ul>
  </div>
);

User.defaultProps = {
  statsFollowers: 0,
  statsViews: 0,
  statsLikes: 0,
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};

export default User;
