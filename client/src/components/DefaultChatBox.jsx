import { Link } from "react-router-dom";
import animation from "/src/assets/chat-animation";
import Lottie from "lottie-react";
import { Image } from "@nextui-org/react";

const DefaultChatBox = () => {
  return (
    <div className="mt-[15vh]">
      <div className="flex items-center justify-center w-[500px] mx-auto ">
        <Lottie animationData={animation} loop={true} />
      </div>
      <div className="flex items-center  mt-4 w-fit mx-auto gap-3">
        <h1 className="text-2xl font-semibold"> Welcome to </h1>
        <Link
          to={"/"}
          className="flex gap-2 items-center hover:underline hover:italic "
        >
          <Image src="/logo.png" className="h-10 " />
          <h1 className="text-2xl  font-semibold logo-font">RChat</h1>
        </Link>
      </div>
    </div>
  );
};

export default DefaultChatBox;
