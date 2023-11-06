import { Avatar } from "@nextui-org/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { nameShorter } from "../utils";
import { useSelector } from "react-redux";

const Message = ({ msg }) => {
  const user = useSelector((st) => st.user);
  console.log(msg);
  return (
    <>
      {msg && (
        <>
          {user?.name === msg?.author?.name && (
            <div className="flex justify-end gap-2">
              <div className=" py-1 px-3 rounded-md bg-violet-700/40 backdrop-blur-sm max-w-xl shadow-inner shadow-teal-100/50 border-white/40 border">
                <h3 className="capitalize font-semibold  text-orange-300">
                  {msg?.author?.name}
                </h3>
                <p className="text-sm"> {msg?.msg}</p>
              </div>
              <AiFillCheckCircle className="text-[10px] text-orange-500 mt-auto" />
            </div>
          )}
          {user?.name !== msg?.author?.name && (
            <div className="flex justify-start max-w-2xl gap-2">
              <Avatar
                radius="full"
                className="transition-transform m-2 mt-auto -z-10"
                color="success"
                name={nameShorter(msg?.author?.name || "")}
                size="sm"
                src={msg?.author?.userPhoto}
              />
              <div className=" py-1 px-3 rounded-md backdrop-blur-2xl max-w-xl shadow-inner shadow-teal-100/50 border-white/40 border w-60">
                <h3 className="capitalize font-semibold  text-orange-300  mb-2">
                  {msg?.author?.name}
                </h3>
                <p className="text-sm">{msg?.msg}</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Message;
