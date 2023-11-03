// import ChatNavBar from "../components/ChatNavBar";
import ChatUserContainer from "../page/chat/ChatUserContainer";
import MessageContainerNav from "../page/chat/MessageContainerNav";

const Chat = () => {
  return (
    <div className="h-full">
      {/* <ChatNavBar /> */}
      <div className="chat-grid h-full">
        <ChatUserContainer />
        <div>
          <MessageContainerNav />
        </div>
      </div>
    </div>
  );
};

export default Chat;
