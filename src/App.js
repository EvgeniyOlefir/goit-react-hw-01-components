import React from "react";

import UserList from "./components/profile/UserList";
import users from "./user.json";

const App = () => {
  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
