import { Avatar, Image, Input } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
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
    const { _id } = user;
    const data = [_id, targetUser._id];
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
      <div className="flex justify-between  gap-3 flex-row-reverse w-10/12 pl-2 my-2 ml-auto md:w-full">
        <div className="flex items-center gap-2 pr-1">
          <Image
            src="/side-logo.svg"
            className="rounded-none text-zinc-900"
            height={30}
            width={30}
          />
        </div>
        <Link to={"/"} className="md:flex gap-2 items-center  ">
          <Image src="/logo.png" className="h-10 " />
          <h1 className="text-2xl  font-semibold logo-font">RChat</h1>
        </Link>
      </div>
      <div className="my-4 space-y-2">
        <Avatar src={user?.userPhoto} className="h-20 w-20 mx-auto" />
        <h1 className="text-2xl font-semibold text-center">{user?.name}</h1>
        <div className="text-center text-xs font-semibold">
          <p>Welcome {user?.name} to our application</p>
          <p>Now start your messaging</p>
        </div>
      </div>
      <Input
        classNames={{
          base: "max-w-full  h-10  ",
          mainWrapper: "h-full",
          input: "text-small",
          innerWrapper: "border-0",
          inputWrapper: "h-full font-normal bg-white/60 ",
        }}
        className="rounded-2xl"
        style={{
          border: 0,
        }}
        variant="bordered"
        placeholder="Search User..."
        size="sm"
        value={searchKey}
        startContent={<AiOutlineSearch />}
        type="search"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      {users.length > 0 && (
        <div className="relative">
          <div className=" font-semibold absolute top-0 z-20 bg-black/95 text-white w-full p-2 pb-4 rounded-md  max-h-52 h-fit overflow-scroll ">
            {users.map((user) => (
              <div
                onClick={() => goToChat(user)}
                key={user._id}
                className={`flex gap-3 text-xl items-center border-b pb-1  hover:translate-x-1 duration-150 cursor-pointer `}
              >
                <Avatar
                  name={nameShorter(user?.name || "")}
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
