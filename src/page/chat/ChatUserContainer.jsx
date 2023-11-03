import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";

const ChatUserContainer = () => {
  return (
    <div>
      <div className="chat-info-bg w-full bg-black/25  h-full ">
        <ChatNavBar />
        <div className="space-y-1 py-6 px-3  overflow-scroll h-[500px]">
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
          <ChatUser />
        </div>
      </div>{" "}
    </div>
  );
};

export default ChatUserContainer;
