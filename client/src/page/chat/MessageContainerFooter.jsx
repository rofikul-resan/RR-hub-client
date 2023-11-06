import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera, AiOutlineSend } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sendMsg } from "../../Rtk/slice/messageSlice";
import axios from "axios";
import { serverUrl, socket } from "../../utils";

const MessageContainerFooter = ({ id, scrollToBottom }) => {
  const user = useSelector((st) => st.user);
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();

  const sendMessage = (data) => {
    const msgData = {
      author: {
        name: user?.name,
        userPhoto: user?.userPhoto,
      },
      ...data,
    };
    dispatch(sendMsg(msgData));
    reset();
    scrollToBottom();
    axios.put(`${serverUrl}/messages/${id}`, msgData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        socket.emit("new-msg", msgData, id);
      }
    });
  };

  return (
    <div className="bg-black/40 backdrop-blur-md px-6 pt-4 pb-6 absolute bottom-0 right-0 clear-both w-full">
      <div className="w-10/12 mx-auto flex  items-center gap-6">
        <div className="flex text-xl gap-3">
          <MdOutlineAddPhotoAlternate />
          <AiOutlineCamera />
          <BiMicrophone />
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit(sendMessage)}>
            <Input
              {...register("msg", { required: true })}
              autoComplete="off"
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
                <button type="submit" className="cursor-pointer">
                  <AiOutlineSend />
                </button>
              }
            ></Input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageContainerFooter;
