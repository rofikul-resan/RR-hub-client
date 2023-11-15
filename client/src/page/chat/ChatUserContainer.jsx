import { useEffect, useState } from "react";
import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";

import { Spinner } from "@nextui-org/react";
import useChatLIst from "../../hook/useChatLIst";

const ChatUserContainer = ({ className }) => {
  const [userChat, setUserChat] = useState([]);

  const { data, isLoading } = useChatLIst();
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
