// import ChatNavBar from "../components/ChatNavBar";
import { Outlet } from "react-router-dom";
import ChatUserContainer from "../page/chat/ChatUserContainer";
import { useEffect, useState } from "react";
import { socket } from "../utils";
import { useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

const Chat = () => {
  const user = useSelector((state) => state.user);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    socket.on();

    return () => {
      socket.off("message");
    };
  }, [user._id]);

  return (
    <div onClick={() => setIsShow(false)} className="">
      <div className="absolute z-[101] top-3 left-1 md:hidden ">
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
      <div className="block md:grid  chat-grid">
        <ChatUserContainer
          className={`absolute md:static ${
            isShow ? "-translate-x-[500px] md:translate-x-0 " : " "
          } duration-150  z-[100]  `}
        />
        <div className=" relative  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
