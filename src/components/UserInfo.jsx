import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../Rtk/slice/userSlice";

const UserInfo = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Dropdown placement="bottom-start" className="mr-2 bg-black/80 text-white">
      <DropdownTrigger>
        <Image
          src="/side-logo.svg"
          className="rounded-none text-zinc-900 cursor-pointer"
          height={25}
          width={25}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions">
        <DropdownItem key="settings">{user?.email}</DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="primary"
          className="text-center"
          as={Button}
          onClick={() => dispatch(logout())}
        >
          <div className="flex gap-2 items-center justify-center ">
            <p> Log Out</p>
            <AiOutlineLogout />
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserInfo;
