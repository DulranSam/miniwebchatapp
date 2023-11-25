import "./App.css";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  const [hasAccout, setHasAccount] = useState(false);
  const { user, setUser } = useState();
  return (
    <div>
      {hasAccout ? (
        <Login
          onHasAccount={() => {
            setHasAccount(true);
          }}
        ></Login>
      ) : (
        <Register
          onHasAccount={() => {
            setHasAccount(false);
          }}
        ></Register>
      )}
    </div>
  );
}
