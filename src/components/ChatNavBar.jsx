import {
  Avatar,
  Image,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import { nameShorter } from "../utils";
import UserInfo from "./UserInfo";

const ChatNavBar = () => {
  return (
    <Navbar maxWidth="full" className="bg-black/60">
      <NavbarBrand className="flex gap-2">
        <Image src="/logo.png" className="h-10" />
        <h1 className="text-2xl  font-semibold logo-font">R-Chat</h1>
      </NavbarBrand>
      <NavbarContent as={"div"} justify="center">
        <div className="relative">
          <Input
            classNames={{
              base: "max-w-full sm:w-[20rem] h-10 border-white/50 ",
              mainWrapper: "h-full",
              input: "text-small",
              innerWrapper: "border-0",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            style={{
              border: 0,
            }}
            variant="bordered"
            placeholder="Search User..."
            size="sm"
            startContent={<AiOutlineSearch />}
            type="search"
          />
          <div className=" font-semibold absolute -bottom-12 bg-white/20 w-full p-2 rounded-md hidden">
            <div className="flex gap-3 text-xl">
              <Avatar
                size="sm"
                name={nameShorter("resan")}
                isBordered
                color="secondary"
              />

              <p className="capitalize">Resan</p>
            </div>
          </div>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <UserInfo />
      </NavbarContent>
    </Navbar>
  );
};

export default ChatNavBar;
