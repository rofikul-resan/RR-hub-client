import { useParams } from "react-router-dom";
import Message from "../../components/Message";
import MessageContainerFooter from "./MessageContainerFooter";
import MessageContainerNav from "./MessageContainerNav";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMsg, setMessageState } from "../../Rtk/slice/messageSlice";
import axios from "axios";
import { serverUrl, socket } from "../../utils";
import useChatLIst from "../../hook/useChatLIst";

const MessageContainer = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const [originalMsg, setOriginalMsg] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const messageBox = useRef(null);
  const { refetch } = useChatLIst();

  const messagesData = useSelector((state) => state.message);
  useEffect(() => {
    messageBox.current?.scrollTo(0, messageBox.current.scrollHeight);
  }, [id]);

  const scrollToBottom = () => {
    messageBox.current.scrollTo(0, messageBox.current.scrollHeight);
  };

  useEffect(() => {
    axios.get(`${serverUrl}/messages/msg/${id}`).then((res) => {
      dispatch(setMessageState(res.data));
      setOriginalMsg(res.data.messages);
      setLoading(false);
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (messagesData?.messages) {
      setOriginalMsg(messagesData?.messages);
    }
  }, [messagesData]);

  // use socket
  useEffect(() => {
    if (messagesData?._id) {
      socket.emit("r-chat", { userId: messagesData?._id });
      socket.on("msg", (msgData) => {
        dispatch(sendMsg(msgData));
        refetch();
        scrollToBottom();
      });
    }

    return () => socket.off();
  }, [dispatch, messagesData?._id, refetch]);

  const msgs = [...originalMsg].reverse();
  const otherUser = messagesData?.members?.filter(
    (mbr) => mbr?.user?._id !== user?._id
  );
  return (
    <div>
      {loading || (
        <div>
          {otherUser && <MessageContainerNav userInfo={otherUser[0]} />}
          <div
            ref={messageBox}
            className="message-container-h py-6 px-3  overflow-scroll "
          >
            <div className="flex gap-2 flex-col-reverse w-full  pb-10 ">
              {msgs.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}
            </div>
          </div>
          <MessageContainerFooter scrollToBottom={scrollToBottom} id={id} />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
