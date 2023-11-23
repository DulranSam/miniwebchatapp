import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

function TalkJS(props) {
  const chatboxEl = useRef();
  const [session, setSession] = useState(null);

  useEffect(() => {
    let currentUser;

    const initializeTalkJS = async () => {
      await Talk.ready;

      currentUser = new Talk.User({
        id: props.user.username,
        name: `${props.user.first_name} ${props.user.last_name}`,
        email: props.user.email,
        photoUrl: "",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const newSession = new Talk.Session({
        appId: "tSoGrYic",
        me: currentUser,
        other: otherUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = newSession.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      setSession(newSession);
    };

    if (!session) {
      initializeTalkJS();
    }

    return () => {
      if (session) {
        session.destroy();
      }
    };
  }, [props.user, session]);

  useEffect(() => {
    if (session && chatboxEl.current) {
      const chatbox = session.createChatbox();
      chatbox.select(session.getActiveConversation());
      chatbox.mount(chatboxEl.current);
    }
  }, [session]);

  return (
    <div ref={chatboxEl} style={{ height: "100vh", width: "100vw" }}></div>
  );
}

export default TalkJS;
