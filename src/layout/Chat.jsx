// import ChatNavBar from "../components/ChatNavBar";
import ChatUserContainer from "../page/chat/ChatUserContainer";

const Chat = () => {
  return (
    <div className="h-full">
      {/* <ChatNavBar /> */}
      <div className="chat-grid h-full">
        <ChatUserContainer />
      </div>
    </div>
  );
};

export default Chat;
