import React from "react";
import User from "./User";

const UserList = ({ users }) => (
  <ul>
    {users.map((user) => (
      <li key={user.name}>
        <User
          avatar={user.avatar}
          name={user.name}
          location={user.location}
          tag={user.tag}
          statsFollowers={user.stats.followers}
          statsViews={user.stats.views}
          statsLikes={user.stats.likes}
        />
      </li>
    ))}
  </ul>
);

export default UserList;
