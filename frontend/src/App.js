import "./App.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Chats from "./Chats";

export default function App() {
  // const [hasAccout, setHasAccount] = useState(false);
  const [user, setUser] = useState();

  if (!user) {
    return (
      <Register
        auth={(user) => {
          setUser(user);
        }}
      ></Register>
    );
  } else {
    return <Chats user={user}></Chats>;
  }
}
