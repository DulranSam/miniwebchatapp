import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

export default function Chats(props) {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  const { username, secret } = props.user; // Destructure user object

  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div className="chats-container">
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} />
      <br />
    </div>
  );
}
