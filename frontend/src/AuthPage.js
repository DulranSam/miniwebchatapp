import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = (props) => {
  const [hasAccout, setHasAccount] = useState(false);

  props.onAuth(() => {});

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
};

export default AuthPage;
