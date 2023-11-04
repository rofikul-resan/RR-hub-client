// import ChatNavBar from "../components/ChatNavBar";
import { Outlet } from "react-router-dom";
import ChatUserContainer from "../page/chat/ChatUserContainer";

const Chat = () => {
  return (
    <div className="">
      <div className="chat-grid">
        <ChatUserContainer />
        <div className=" relative  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
