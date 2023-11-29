import { Avatar, Badge } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatUser = ({ chat }) => {
  const user = useSelector((state) => state.user);
  const { pathname } = useLocation();
  console.log(pathname);

  const otherUser = chat?.members?.filter((ur) => user?._id !== ur?.user?._id);
  return (
    <Link to={`/chat/${chat?._id}`}>
      <div
        className={`flex gap-1 items-center shadow-inner shadow-teal-100/50  ${
          pathname === `/chat/${chat._id}`
            ? "chat-user-bg translate-x-2"
            : " bg-zinc-200"
        }  hover:bg-violet-800 hover:text-white rounded-full
         hover:translate-x-2 duration-250 cursor-pointer  w-11/12 mx-auto mb-1  `}
      >
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right "
          className="m-2 -right-[2px] -bottom-[2px]"
          isInvisible={!otherUser[0].user?.isActive}
        >
          <Avatar
            isBordered
            radius="full"
            className="transition-transform m-2"
            color="secondary"
            name={nameShorter(otherUser[0]?.user?.name || "")}
            size="sm"
            src={otherUser[0]?.userPhoto}
          />
        </Badge>
        <div className="flex flex-col">
          <h1 className="font-semibold capitalize ">
            {" "}
            {otherUser[0]?.user?.name}
          </h1>
          <p className="text-xs">
            {chat?.lastMsg?.msg?.slice(0, 20)}
            {chat?.lastMsg?.msg?.length > 20 && "..."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ChatUser;
