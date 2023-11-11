import { useMultiChatLogic, MultiChatSocket , MultiChatWindow  } from "react-chat-engine-advanced";



export default function Chats(props) {
  const projectId = "3909b22d-70f4-4e25-af34-cedf6bc65542";
  const username = "Veloxal";
  const secret = "Veloxal";

  const chatProps = useMultiChatLogic(projectId, username, secret);
  return (
    <div>
    <MultiChatSocket {...chatProps} style={{ height: '100vh' }}  />

    <MultiChatWindow 
      chats={chatProps.chats}
      messages={chatProps.messages}
      activeChatId={chatProps.activeChatId}
      username={chatProps.username}
      peopleToInvite={chatProps.peopleToInvite}
      hasMoreChats={chatProps.hasMoreChats}
      hasMoreMessages={chatProps.hasMoreMessages}
      onChatFormSubmit={chatProps.onChatFormSubmit}
      onChatCardClick={chatProps.onChatCardClick}
      onChatLoaderShow={chatProps.onChatLoaderShow}
      onMessageLoaderShow={chatProps.onMessageLoaderShow}
      onMessageLoaderHide={chatProps.onMessageLoaderHide}
      onBottomMessageShow={chatProps.onBottomMessageShow}
      onBottomMessageHide={chatProps.onBottomMessageHide}
      onMessageFormSubmit={chatProps.onMessageFormSubmit}
      onInvitePersonClick={chatProps.onInvitePersonClick}
      onRemovePersonClick={chatProps.onRemovePersonClick}
      onDeleteChatClick={chatProps.onDeleteChatClick}
      style={{ height: '100vh' }} 
    />
    </div>
  );
}

