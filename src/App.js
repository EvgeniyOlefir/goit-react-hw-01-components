import React from "react";
import User from "./components/User";
import users from "./user.json";

const App = () => {
  return (
    <div>
      <User
        avatar={users.avatar}
        name={users.name}
        location={users.location}
        tag={users.tag}
        statsFollowers={users.stats.followers}
        statsViews={users.stats.views}
        statsLikes={users.stats.likes}
      />
    </div>
  );
};

export default App;
