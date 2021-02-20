import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import FriendList from "./components/FriendsList";
import friends from "./data/friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
