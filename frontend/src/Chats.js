import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { ChatEngine } from "react-chat-engine";

export default function Chats(props) {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  const { username, secret } = props.user; // Destructure user object
  const usernamex = "yumeth";
  const userPass = "yumeth123";

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <ChatEngine
      projectId={chatProps.projectId}
      userName={chatProps.username}
      userSecret={chatProps.secret}
    />
  );
}

// projectID={chatProps.projectId}
// userName={chatProps.username}
// userSecret={chatProps.secret}
