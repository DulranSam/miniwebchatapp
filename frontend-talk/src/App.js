import React, { useState } from "react";
import Register from "./Register";
import Talk from "talkjs";

const App = () => {
  const [user, setUser] = useState();

  if (!user) {
    <Register
      auth={(user) => {
        setUser(user);
      }}
    ></Register>;
    //<Talk user={user}></Talk>;
  } else {
    <Talk user={user}></Talk>;
  }
};

export default App;
