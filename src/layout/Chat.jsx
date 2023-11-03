import { Button } from "@nextui-org/react";
import ChatNavBar from "../components/ChatNavBar";

const Chat = () => {
  return (
    <div>
      <ChatNavBar />
      <Button variant="solid" color="primary">
        click
      </Button>
      chat
    </div>
  );
};

export default Chat;
