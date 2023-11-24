import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera, AiOutlineSend } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sendMsg } from "../../Rtk/slice/messageSlice";
import axios from "axios";
import { serverUrl, socket } from "../../utils";
import useChatLIst from "../../hook/useChatLIst";

const MessageContainerFooter = ({ id, scrollToBottom }) => {
  const user = useSelector((st) => st.user);
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const { refetch } = useChatLIst();
  const date = new Date();

  const sendMessage = (data) => {
    const msgData = {
      author: {
        name: user?.name,
        userPhoto: user?.userPhoto,
      },
      time: date.getTime(),
      ...data,
    };
    dispatch(sendMsg(msgData));
    reset();
    scrollToBottom();
    axios.put(`${serverUrl}/messages/${id}`, msgData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        socket.emit("new-msg", msgData, id);
        refetch();
      }
    });
  };

  return (
    <div className=" pb-6 w-full">
      <div className="w-11/12 mx-auto flex  items-center gap-6 bg-white/60 px-12 py-3 rounded-full">
        <div className="flex text-xl gap-3">
          <Button
            isIconOnly
            className="bg-white/60 hover:bg-violet-600 hover:text-white"
          >
            <MdOutlineAddPhotoAlternate />
          </Button>
          <Button
            isIconOnly
            className="bg-white/60 hover:bg-violet-600 hover:text-white"
          >
            <AiOutlineCamera />
          </Button>
          <Button
            variant="bordered"
            isIconOnly
            className="bg-white/60 hover:bg-violet-600 hover:text-white"
          >
            <BiMicrophone />
          </Button>
        </div>
        <div className="flex-1">
          <form className="flex gap-2" onSubmit={handleSubmit(sendMessage)}>
            <Input
              {...register("msg", { required: true })}
              autoComplete="off"
              variant="bordered"
              classNames={{
                base: "max-w-full min-h-10 max-h-20 ",
                mainWrapper: "h-full",
                input: "text-small",
                innerWrapper: "border-0",
                inputWrapper: "h-full font-normal  bg-white/40 ",
              }}
              endContent={
                <button type="submit" className="cursor-pointer">
                  <MdOutlineEmojiEmotions />
                </button>
              }
            ></Input>
            <Button
              isIconOnly
              className="bg-white/60 hover:bg-violet-600 hover:text-white"
              type="submit"
            >
              <AiOutlineSend />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageContainerFooter;
