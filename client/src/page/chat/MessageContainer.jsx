import Message from "../../components/Message";
import MessageContainerFooter from "./MessageContainerFooter";
import MessageContainerNav from "./MessageContainerNav";

const MessageContainer = () => {
  return (
    <div>
      <MessageContainerNav />
      <div className="message-container-h py-6 px-3  overflow-scroll">
        <div className="flex gap-2 flex-col-reverse   w-full  pb-8 ">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      <MessageContainerFooter />
    </div>
  );
};

export default MessageContainer;
