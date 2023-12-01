import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import { ChatEngine } from "react-chat-engine";

export default function Chats(props) {
  const projectId = process.env.REACT_APP_CHAT_ENGINE_CHAT_ID;
  const { username, secret } = props.user; // Destructure user object

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ChatEngine
        projectID={chatProps.projectId}
        userName={chatProps.username}
        userSecret={chatProps.secret}
      />
    </div>
  );
}
