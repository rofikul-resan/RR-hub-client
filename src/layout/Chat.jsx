// import ChatNavBar from "../components/ChatNavBar";
import { Outlet } from "react-router-dom";
import ChatUserContainer from "../page/chat/ChatUserContainer";
import { useEffect, useState } from "react";
import { socket } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@nextui-org/react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { setActive } from "../Rtk/slice/userSlice";

const Chat = () => {
  const user = useSelector((state) => state.user);
  const [isShow, setIsShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on();
    socket.emit("Enter-user", { userId: user?._id });
    socket.on("isActive", (data) => {
      dispatch(setActive(data));
    });

    return () => {
      socket.off("message");
    };
  }, [user._id, dispatch]);

  return (
    <div className="h-full">
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
      <div className="block md:grid  chat-grid h-full">
        <ChatUserContainer
          className={`absolute md:static ${
            isShow ? "-translate-x-[500px] md:translate-x-0 " : " "
          } duration-150  z-[100] top-0  `}
        />
        <div style={{ height: "100%" }} className=" relative ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Chat;
