import "./App.css";
import {useState} from "react";
import Register from "./Register";
import Chats from "./Chats";

export default function App() {

  const [user,setUser] = useState();

  if(!user){
    //return <Register setUser={user=>setUser(user)}></Register>
    return <Chats user={user}></Chats> //Getting a preview of the chatsPage first
  }else{
    return <Chats user={user}></Chats>
  }
}
