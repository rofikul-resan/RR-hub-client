// import ChatNavBar from "../components/ChatNavBar";
import { Outlet } from "react-router-dom";
import ChatUserContainer from "../page/chat/ChatUserContainer";
import { useEffect } from "react";
import { socket } from "../utils";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    socket.on();

    return () => {
      socket.off("message");
    };
  }, [user._id]);
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
