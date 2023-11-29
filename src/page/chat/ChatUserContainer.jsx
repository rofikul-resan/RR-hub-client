import { useEffect, useState } from "react";
import ChatNavBar from "../../components/ChatNavBar";
import ChatUser from "./ChatUser";

import { Button, Spinner, useDisclosure } from "@nextui-org/react";
import useChatLIst from "../../hook/useChatLIst";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import SearchUser from "./SearchUser";
import CreateGroupModal from "./CreateGroupModal";

const ChatUserContainer = ({ className }) => {
  const [userChat, setUserChat] = useState([]);

  // modal state
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { data, isLoading } = useChatLIst();
  useEffect(() => {
    console.log(data);
    setUserChat(data);
  }, [data]);

  return (
    <div className={className}>
      <CreateGroupModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div>
        <ChatNavBar />
        <div className="bg-white/60  py-4 mb-6 rounded-2xl mx-4 space-y-2">
          <SearchUser onOpen={onOpen} />
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner className=" w-fit mx-auto mt-16" />
            </div>
          ) : (
            <div className="space-y-1 pb-6  overflow-scroll h-fit user-container-h ">
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
