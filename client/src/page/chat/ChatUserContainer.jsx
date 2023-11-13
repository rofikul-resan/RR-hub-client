import { useEffect, useState } from "react";
import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";
import axios from "axios";
import { serverUrl } from "../../utils";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useGetChatUserQuery } from "../../Rtk/query/messageApi";
import { Spinner } from "@nextui-org/react";

const ChatUserContainer = ({ className }) => {
  const user = useSelector((state) => state.user);
  const [userChat, setUserChat] = useState([]);

  const { data, isLoading } = useGetChatUserQuery(user._id);
  useEffect(() => {
    console.log(data);
    setUserChat(data);
  }, [data]);

  return (
    <div className={className}>
      <div className="chat-info-bg w-full bg-black/25  shadow-inner shadow-white ">
        <ChatNavBar />
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner className=" w-fit mx-auto mt-16" />
          </div>
        ) : (
          <div className="space-y-1 py-6 px-3  overflow-scroll h-fit max-h-[500px]">
            {userChat?.map((chat) => (
              <ChatUser key={chat._id} chat={chat} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatUserContainer;
