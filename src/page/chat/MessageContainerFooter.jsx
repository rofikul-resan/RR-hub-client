import { Input } from "@nextui-org/react";
import { AiOutlineCamera, AiOutlineSend } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
const MessageContainerFooter = () => {
  return (
    <div className="bg-black/40 backdrop-blur-md px-6 pt-4 pb-6 absolute bottom-0 right-0 clear-both w-full">
      <div className="w-10/12 mx-auto flex  items-center gap-6">
        <div className="flex text-xl gap-3">
          <MdOutlineAddPhotoAlternate />
          <AiOutlineCamera />
          <BiMicrophone />
        </div>
        <div className="flex-1">
          <form action="">
            <Input
              variant="bordered"
              classNames={{
                base: "max-w-full min-h-10 max-h-20 border-white/50 ",
                mainWrapper: "h-full",
                input: "text-small",
                innerWrapper: "border-0",
                inputWrapper:
                  "h-full font-normal text-white bg-default-400/20 dark:bg-default-500/20",
              }}
              endContent={
                <div className="cursor-pointer">
                  <AiOutlineSend />
                </div>
              }
            ></Input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageContainerFooter;
