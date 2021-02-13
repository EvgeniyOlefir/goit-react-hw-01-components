import React from "react";
import UserList from "./components/profile/UserList";
import users from "./user.json";
import Statistics from "./components/statistics/StatList";
import statisticalData from "./statistical-data.json";

const App = () => {
  return (
    <div>
      <UserList users={users} />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </div>
  );
};

export default App;
