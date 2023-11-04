import { Avatar, Badge } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { Link } from "react-router-dom";

const ChatUser = () => {
  return (
    <Link to={"/chat/resan"}>
      <div className="flex gap-1 items-center px-2  hover:bg-violet-500/70 rounded-md hover:translate-x-1 duration-250 cursor-pointer border-b border-zinc-600 shadow-sm bg-black/30">
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right "
          className="m-2 -right-[2px] -bottom-[2px]"
          isInvisible={false}
        >
          <Avatar
            radius="full"
            className="transition-transform m-2"
            color="secondary"
            name={nameShorter("Jason Hughes")}
            size="sm"
            src=""
          />
        </Badge>
        <div className="flex flex-col">
          <h1 className="font-semibold "> Rofikul islam</h1>
          <p className="text-xs">hi</p>
        </div>
      </div>
    </Link>
  );
};

export default ChatUser;
