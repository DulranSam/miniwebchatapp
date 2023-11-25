import React, { useState } from "react";
import Chats from "./Chats";

const AuthPage = (props) => {
  const { user, setUser } = useState();

  if (!user) {
    return <AuthPage hasAccount={(user) => setUser(user)}></AuthPage>; //User Registers
    //return <Chats user={user}></Chats>;
    //return <Login onAuth={(user) => setUser(user)}></Login>;
    //return <Chats user={user}></Chats>;
  } else {
    return <Chats user={user}></Chats>;
    //return <Chats user={user}></Chats> //Registered User redirected to ChatsPage
  }
};

export default AuthPage;
