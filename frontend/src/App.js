import "./App.css";
import {useState} from "react";
import Login from "./Login";
import Chats from "./Chats";
import Register from "./Register";

export default function App() {

  const [user,setUser] = useState(undefined);

  if(!user){
  return <Register onAuth={user=>setUser(user)}></Register> //User Registers
    
  }else{
   //return <Login user={user} ></Login>
   return <Chats user={user}></Chats> //Registered User redirected to ChatsPage
  }
}
