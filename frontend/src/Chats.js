import { useMultiChatLogic, MultiChatSocket , MultiChatWindow  } from "react-chat-engine-advanced";



export default function Chats(props) {
  const projectId = "3909b22d-70f4-4e25-af34-cedf6bc65542";
  const username = props.user.username; //needs to be automatic (using props passed from App)
  const secret = props.user.secret; //needs to be automatic (using props passed from App)

  const usernamez = "Veloxal"; //needs to be automatic (using props passed from App)
  const secretz = "Veloxal";

  const chatProps = useMultiChatLogic(projectId, username, secret);
  const chatPropsz = useMultiChatLogic(projectId, usernamez, secretz);
  return (
    <div>
    <MultiChatSocket {...chatProps} style={{ height: '100vh',width:"100vw"}}  />

    <MultiChatWindow 
      chats={chatProps.chats}
      messages={chatProps.messages}
      activeChatId={chatProps.activeChatId}
      username={chatProps.username}
      secret={chatProps.secret}
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
      style={{ height: '100vh',width:"100vw"}} //functions need to be written forEach
    />
    <br></br>
    <MultiChatSocket {...chatPropsz} style={{ height: '100vh',width:"100vw"}}  />
    <MultiChatWindow 
      chats={chatPropsz.chats}
      messages={chatPropsz.messages}
      activeChatId={chatPropsz.activeChatId}
      username={chatPropsz.username}
      secret={chatPropsz.secret}
      peopleToInvite={chatPropsz.peopleToInvite}
      hasMoreChats={chatPropsz.hasMoreChats}
      hasMoreMessages={chatPropsz.hasMoreMessages}
      onChatFormSubmit={chatPropsz.onChatFormSubmit}
      onChatCardClick={chatPropsz.onChatCardClick}
      onChatLoaderShow={chatPropsz.onChatLoaderShow}
      onMessageLoaderShow={chatPropsz.onMessageLoaderShow}
      onMessageLoaderHide={chatPropsz.onMessageLoaderHide}
      onBottomMessageShow={chatPropsz.onBottomMessageShow}
      onBottomMessageHide={chatPropsz.onBottomMessageHide}
      onMessageFormSubmit={chatPropsz.onMessageFormSubmit}
      onInvitePersonClick={chatPropsz.onInvitePersonClick}
      onRemovePersonClick={chatPropsz.onRemovePersonClick}
      onDeleteChatClick={chatPropsz.onDeleteChatClick}
      style={{ height: '100vh',width:"100vw"}} //functions need to be written forEach
    />
    </div>
  );
}

