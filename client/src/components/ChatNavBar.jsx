import { Avatar, Image, Input } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { nameShorter, serverUrl } from "../utils";
import { Link, useNavigate } from "react-router-dom";

const ChatNavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((s) => s.user);
  const [searchKey, setSearchKey] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get(`${serverUrl}/user/search?key=${searchKey}`).then((res) => {
        const userData = res.data;
        return setUsers(userData);
      });
    }, 500);
  }, [searchKey, user]);

  const goToChat = (targetUser) => {
    const { _id, name, userPhoto } = user;
    const mainUser = { _id, name, userPhoto };
    const data = [mainUser, targetUser];
    console.log(data);
    axios.post(`${serverUrl}/messages/msg`, data).then((res) => {
      setUsers([]);
      setSearchKey("");
      console.log(res.data);
      return navigate(`/chat/${res.data.messageId}`);
    });
    console.log(data);
  };

  return (
    <div className=" py-3 px-3 space-y-3  ">
      <div className="flex justify-between flex-col-reverse gap-3 md:flex-row-reverse w-10/12 pl-2 my-2 ml-auto md:w-full">
        <div className="flex items-center gap-2">
          <UserInfo user={user} />
          <h1>{user.name.split(" ").slice(0, 2).join(" ")}</h1>
        </div>
        <Link to={"/"} className="md:flex gap-2 items-center hidden  ">
          <Image src="/logo.png" className="h-10 " />
          <h1 className="text-2xl  font-semibold logo-font">RChat</h1>
        </Link>
      </div>
      <Input
        classNames={{
          base: "max-w-full  h-10 border-white/50 ",
          mainWrapper: "h-full",
          input: "text-small",
          innerWrapper: "border-0",
          inputWrapper:
            "h-full font-normal text-white bg-default-400/20 dark:bg-default-500/20",
        }}
        style={{
          border: 0,
        }}
        variant="bordered"
        placeholder="Search User..."
        size="sm"
        value={searchKey}
        startContent={<AiOutlineSearch className="text-white" />}
        type="search"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      {users.length > 0 && (
        <div className="relative">
          <div className=" font-semibold absolute top-0 z-20 bg-black/95 w-full p-2 pb-4 rounded-md  max-h-52 h-fit overflow-scroll ">
            {users.map((user) => (
              <div
                onClick={() => goToChat(user)}
                key={user._id}
                className={`flex gap-3 text-xl items-center border-b pb-1  hover:translate-x-1 duration-150 cursor-pointer `}
              >
                <Avatar
                  name={nameShorter(user?.name)}
                  color="secondary"
                  className="w-5 h-5 m-1 rounded-sm"
                  src={user?.userPhoto}
                />

                <p className="capitalize text-sm">{user?.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatNavBar;
