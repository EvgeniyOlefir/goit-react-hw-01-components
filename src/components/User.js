import React from "react";

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
        <span class="quantity">{statsFollowers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{statsViews}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{statsLikes}</span>
      </li>
    </ul>
  </div>
);

export default User;
