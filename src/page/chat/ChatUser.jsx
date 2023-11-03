import { Avatar, Badge } from "@nextui-org/react";
import { nameShorter } from "../../utils";

const ChatUser = () => {
  return (
    <div className="flex gap-3 items-center px-2  hover:bg-violet-500/70 rounded-md hover:translate-x-1 duration-250 cursor-pointer border-b border-zinc-600 shadow-sm bg-black/30">
      <Badge
        content=""
        color="success"
        shape="circle"
        placement="bottom-right "
        className="m-2 right-0 bottom-0"
        isInvisible={false}
      >
        <Avatar
          radius="full"
          className="transition-transform m-2"
          color="secondary"
          name={nameShorter("Jason Hughes")}
          src=""
        />
      </Badge>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl"> Rofikul islam</h1>
        <p className="text-xs">hi</p>
      </div>
    </div>
  );
};

export default ChatUser;
