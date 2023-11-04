import { Avatar, Badge, Navbar, NavbarContent } from "@nextui-org/react";
import { nameShorter } from "../../utils";
import { AiOutlinePhone, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const MessageContainerNav = () => {
  return (
    <Navbar className="bg-violet-600/30 backdrop-blur-md ">
      <NavbarContent>
        <Badge
          content=""
          color="warning"
          shape="circle"
          placement="bottom-right "
          className="m-2 -right-1 -bottom-1"
          isInvisible={false}
        >
          <Avatar
            isBordered
            radius="full"
            className="transition-transform m-2"
            color="success"
            name={nameShorter("Jason Hughes")}
            size="sm"
            src=""
          />
        </Badge>
        <div className="flex flex-col">
          <h1 className="font-semibold "> Rofikul islam</h1>
          <p className="text-xs">Active Now</p>
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
            <BsThreeDotsVertical />
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default MessageContainerNav;
