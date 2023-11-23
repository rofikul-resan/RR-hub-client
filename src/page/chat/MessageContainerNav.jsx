import { Avatar, Badge, Navbar, NavbarContent } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { AiOutlinePhone, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import moment from "moment/moment";

const MessageContainerNav = ({ userInfo }) => {
  const { user } = userInfo;
  return (
    <Navbar className="bg-violet-600/30 backdrop-blur-md pl-7 ">
      <NavbarContent>
        <Badge
          content=""
          color="warning"
          shape="circle"
          placement="bottom-right "
          className="m-2 -right-1 -bottom-1"
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
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="text-white text-2xl flex gap-3">
          <div className="cursor-pointer">
            <AiOutlinePhone />
          </div>
          <div className="cursor-pointer">
            <AiOutlineVideoCameraAdd />
          </div>
          <div className="cursor-pointer">
            <FaInfoCircle />
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default MessageContainerNav;
