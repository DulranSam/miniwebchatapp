import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';

// 1. SERVER
const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const username = 'Adam_La_Morre';
const secret = 'pass1234';

export default function Chats () {
  // 2. HOOK
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <div>
     
      <MultiChatWindow {...chatProps} />
    
      <MultiChatSocket {...chatProps} />
    </div>
  );
};