import { useEffect, useState } from "react";
import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";

import { Button, Spinner } from "@nextui-org/react";
import useChatLIst from "../../hook/useChatLIst";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import SearchUser from "./SearchUser";

const ChatUserContainer = ({ className, isShow, setIsShow }) => {
  const [userChat, setUserChat] = useState([]);

  const { data, isLoading } = useChatLIst();
  useEffect(() => {
    console.log(data);
    setUserChat(data);
  }, [data]);

  return (
    <div className={className}>
      <div>
        <div className="flex">
          <div className=" md:hidden mt-4 ml-4 ">
            <Button
              isIconOnly
              variant="bordered"
              color="primary"
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? (
                <GiHamburgerMenu className="text-white" />
              ) : (
                <GiTireIronCross className="text-white" />
              )}
            </Button>
          </div>
          <ChatNavBar />
        </div>
        <div className="bg-white/60  py-4 rounded-2xl mx-4 space-y-2">
          <SearchUser />
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner className=" w-fit mx-auto mt-16" />
            </div>
          ) : (
            <div className="space-y-1 pb-6  overflow-scroll h-fit user-container-h ">
              {userChat?.map((chat) => (
                <ChatUser key={chat._id} chat={chat} />
              ))}
              {userChat?.map((chat) => (
                <ChatUser key={chat._id} chat={chat} />
              ))}
              {userChat?.map((chat) => (
                <ChatUser key={chat._id} chat={chat} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatUserContainer;
