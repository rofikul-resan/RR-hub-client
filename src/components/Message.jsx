import { Avatar } from "@nextui-org/react";
import { nameShorter } from "../utils";
import { useSelector } from "react-redux";

const Message = ({ msg }) => {
  const user = useSelector((st) => st.user);
  return (
    <>
      {msg && (
        <>
          {user?.name === msg?.author?.name && (
            <div className="flex justify-end gap-2 z-10">
              <div className=" py-2 px-6  rounded-full chat-user-bg  max-w-lg shadow-inner shadow-teal-100/50">
                <p className="text-sm"> {msg?.msg}</p>
              </div>
            </div>
          )}
          {user?.name !== msg?.author?.name && (
            <div className="flex justify-start items-center max-w-lg gap-2">
              <Avatar
                isBordered
                radius="full"
                className=" m-2 "
                color="secondary"
                name={nameShorter(msg?.author?.name || "")}
                size="sm"
                src={msg?.author?.userPhoto}
              />
              <div className=" py-2 px-6 rounded-full bg-white/60 max-w-xl ">
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
