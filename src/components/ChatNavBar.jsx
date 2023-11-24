import { Avatar, Image } from "@nextui-org/react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const ChatNavBar = () => {
  const user = useSelector((s) => s.user);

  return (
    <div className=" py-3 px-3 space-y-3 w-full ">
      <div className="flex justify-between  gap-3 flex-row-reverse w-10/12 pl-2 my-2 ml-auto md:w-full">
        <div className="flex items-center gap-2 pr-1">
          <Image
            src="/side-logo.svg"
            className="rounded-none text-zinc-900"
            height={30}
            width={30}
          />
        </div>
        <Link to={"/"} className="md:flex gap-2 items-center  ">
          <Image src="/logo.png" className="h-10 " />
          <h1 className="text-2xl  font-semibold logo-font">RChat</h1>
        </Link>
      </div>
      <div className="my-4 space-y-2">
        <Avatar src={user?.userPhoto} className="h-20 w-20 mx-auto" />
        <h1 className="text-2xl font-semibold text-center">{user?.name}</h1>
      </div>
    </div>
  );
};

export default ChatNavBar;
