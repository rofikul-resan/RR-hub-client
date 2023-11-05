import { useParams } from "react-router-dom";
import Message from "../../components/Message";
import MessageContainerFooter from "./MessageContainerFooter";
import MessageContainerNav from "./MessageContainerNav";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageState } from "../../Rtk/slice/messageSlice";
import axios from "axios";
import { serverUrl } from "../../utils";
import { Progress } from "@nextui-org/react";

const MessageContainer = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const [originalMsg, setOriginalMsg] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const messageBox = useRef(null);

  const messagesData = useSelector((state) => state.message);
  useEffect(() => {
    messageBox.current?.scrollTo({
      top: messageBox.current?.scrollHeight + 100,
      behavior: "smooth",
    });
  }, [id]);

  const scrollToBottom = () => {
    messageBox.current.scrollTo({
      top: messageBox.current.scrollHeight + 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios.get(`${serverUrl}/messages/msg/${id}`).then((res) => {
      dispatch(setMessageState(res.data));
      setOriginalMsg(res.data.messages);
      setLoading(false);
    });
  }, [dispatch, id]);

  // useEffect(() => {
  //   setOriginalMsg(messagesData?.messages);
  // }, [messagesData?.messages]);

  const msgs = [...originalMsg].reverse();
  const otherUser = messagesData?.members?.filter(
    (mbr) => mbr._id !== user?._id
  );
  return (
    <>
      <>
        {loading || (
          <div>
            {otherUser && (
              <MessageContainerNav
                name={otherUser[0]?.name}
                userImg={otherUser[0].userPhoto}
              />
            )}
            <div
              ref={messageBox}
              className="message-container-h py-6   px-3  overflow-scroll"
            >
              <div className="flex gap-2 flex-col-reverse   w-full  pb-12 ">
                {msgs.map((msg, i) => (
                  <Message key={i} msg={msg} />
                ))}
              </div>
            </div>
            <MessageContainerFooter scrollToBottom={scrollToBottom} id={id} />
          </div>
        )}
      </>
    </>
  );
};

export default MessageContainer;
