import "./App.css";
import { useState } from "react";
import AuthPage from "./AuthPage";
import Chats from "./Chats";

export default function App() {
  const { user, setUser } = useState();

  if (!user) {
    //return <AuthPage onAuth={(user) => setUser(user)}></AuthPage>; //User Registers
    return <Chats user={user}></Chats>;
    //return <Login onAuth={(user) => setUser(user)}></Login>;
    //return <Chats user={user}></Chats>;
  } else {
    return <Chats user={user}></Chats>;
    //return <Chats user={user}></Chats> //Registered User redirected to ChatsPage
  }
}
