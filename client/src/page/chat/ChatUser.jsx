import { Avatar, Badge } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatUser = ({ chat }) => {
  const user = useSelector((state) => state.user);
  const { pathname } = useLocation();

  const otherUser = chat?.members?.filter((ur) => user._id !== ur?.user?._id);
  console.log(chat);
  return (
    <Link to={`/chat/${chat._id}`}>
      <div
        className={`flex gap-1 items-center px-2  ${
          pathname === `/chat/${chat._id}` ? "bg-violet-500/70" : ""
        } hover:bg-violet-500/70 rounded-md hover:translate-x-1 duration-250 cursor-pointer border-b border-zinc-600  mb-1 bg-black/30 shadow-inner shadow-teal-100/50  border`}
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
            radius="full"
            className="transition-transform m-2"
            color="secondary"
            name={nameShorter(otherUser[0]?.user?.name || "")}
            size="sm"
            src={otherUser[0]?.userPhoto}
          />
        </Badge>
        <div className="flex flex-col">
          <h1 className="font-semibold "> {otherUser[0]?.user?.name}</h1>
          <p className="text-xs">{chat?.lastMsg?.msg}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatUser;
