import "./App.css";
import {useState} from "react";
import Login from "./Login";
import Chats from "./Chats";

export default function App() {

  const [user,setUser] = useState(undefined);

  if(!user){
   //return <Login onAuth={user=>setUser(user)}></Login>
    return <Chats user={user}></Chats> //Getting a preview of the chatsPage
  }else{
    return <Chats user={user}></Chats>
  }
}
