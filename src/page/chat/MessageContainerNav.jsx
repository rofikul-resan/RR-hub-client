import { Avatar, Badge } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { AiOutlinePhone, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import moment from "moment/moment";

const MessageContainerNav = ({ userInfo }) => {
  const { user } = userInfo;
  return (
    <div className="flex items-center px-4 py-2 justify-between shadow-lg">
      <div className="flex gap-2">
        <Badge
          content=""
          color="warning"
          shape="circle"
          placement="bottom-right"
          className="m-2 right-1 bottom-3"
          isInvisible={!user?.isActive}
        >
          <Avatar
            isBordered
            radius="full"
            className="transition-transform m-2"
            color="success"
            name={nameShorter(user?.name || "")}
            size="sm"
            src={user?.userPhoto}
          />
        </Badge>
        <div className="flex flex-col">
          <h1 className="font-semibold capitalize "> {user?.name}</h1>
          <h1 className=" text-xs "> {user?.email}</h1>
          <p className="text-xs">
            {user?.isActive
              ? "Active Now"
              : `Active ${moment(user?.lastActive).fromNow()}`}
          </p>
        </div>
      </div>
      <div>
        <div className=" text-2xl flex gap-3">
          <div className="cursor-pointer">
            <AiOutlinePhone />
          </div>
          <div className="cursor-pointer">
            <AiOutlineVideoCameraAdd />
          </div>
          <div className="cursor-pointer">
            <IoMdInformationCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainerNav;
