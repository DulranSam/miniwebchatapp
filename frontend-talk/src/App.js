import React, { useState } from "react";
import Register from "./Register";
import Talk from "talkjs";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  // if (!user) {
  //   return (
  //     <Register
  //       auth={(user) => {
  //         setUser(user);
  //       }}
  //     ></Register>
  //   );
  //   //return <Talk user={user}></Talk>;
  // } else {
  //   return <Talk></Talk>;
  // }
  return (
    <div>
      <Talk></Talk>
    </div>
  );
};

export default App;
