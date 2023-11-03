import ChatUser from "./ChatUser";

const ChatUserContainer = () => {
  return (
    <div className="chat-info-bg w-full  h-full">
      <div className="space-y-1 p-6 ">
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
      </div>
    </div>
  );
};

export default ChatUserContainer;
