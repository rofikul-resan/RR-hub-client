import { Avatar, Badge, Navbar, NavbarContent } from "@nextui-org/react";
import { nameShorter } from "../../utils";

const MessageContainerNav = () => {
  return (
    <Navbar>
      <NavbarContent>
        <Badge
          content=""
          color="success"
          shape="circle"
          placement="bottom-right "
          className="m-2 right-0 bottom-0"
          isInvisible={false}
        >
          <Avatar
            radius="full"
            className="transition-transform m-2"
            color="secondary"
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
    </Navbar>
  );
};

export default MessageContainerNav;
