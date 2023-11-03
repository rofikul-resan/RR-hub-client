import { Image, Input } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import UserInfo from "./UserInfo";

const ChatNavBar = () => {
  return (
    <div className=" py-3 px-4 space-y-3">
      <div className="flex justify-between flex-row-reverse ">
        <div className="flex items-center gap-2">
          <UserInfo />
          <h1>Rofikul Islam</h1>
        </div>
        <div className="flex gap-2 ">
          <Image src="/logo.png" className="h-10" />
          <h1 className="text-2xl  font-semibold logo-font">R-Chat</h1>
        </div>
      </div>
      <Input
        classNames={{
          base: "max-w-full  h-10 border-white/50 ",
          mainWrapper: "h-full",
          input: "text-small",
          innerWrapper: "border-0",
          inputWrapper:
            "h-full font-normal text-white bg-default-400/20 dark:bg-default-500/20",
        }}
        style={{
          border: 0,
        }}
        variant="bordered"
        placeholder="Search User..."
        size="sm"
        startContent={<AiOutlineSearch className="text-white" />}
        type="search"
      />
      {/* <div className="relative">
        <div className=" font-semibold absolute top-0 z-20 bg-black/95 w-full p-2 rounded-md  max-h-52 h-fit overflow-scroll ">
          <div className="flex gap-3 text-xl items-center border-b pb-1  hover:translate-x-1 duration-150 cursor-pointer">
            <Avatar
              size="sm"
              name={nameShorter("resan")}
              isBordered
              color="secondary"
              className="w-5 h-5 m-1"
            />

            <p className="capitalize text-sm">Resan</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ChatNavBar;
