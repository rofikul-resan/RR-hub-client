import { useEffect, useState } from "react";
import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";
import axios from "axios";
import { serverUrl } from "../../utils";
import { useSelector } from "react-redux";

const ChatUserContainer = () => {
  const user = useSelector((state) => state.user);
  const [userChat, setUserChat] = useState([]);

  useEffect(() => {
    axios.get(`${serverUrl}/messages/user?userId=${user._id}`).then((res) => {
      console.log("get", res.data);
      setUserChat(res.data);
    });
  }, [user._id]);
  return (
    <div>
      <div className="chat-info-bg w-full bg-black/25  h-full shadow-inner shadow-white ">
        <ChatNavBar />
        <div className="space-y-1 py-6 px-3  overflow-scroll h-[500px]">
          {userChat.map((chat) => (
            <ChatUser key={chat._id} chat={chat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatUserContainer;
