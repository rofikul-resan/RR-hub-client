import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineUsergroupAdd } from "react-icons/ai";
import { nameShorter, serverUrl } from "../../utils";
import { useSelector } from "react-redux";
import { Avatar, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const SearchUser = ({ onOpen }) => {
  const user = useSelector((s) => s.user);
  const navigate = useNavigate();
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
    <div className="w-11/12 mx-auto">
      <div className=" font-semibold my-2 flex justify-between">
        <h3>Chat</h3>
        <h3
          onClick={onOpen}
          className="hover:underline cursor-pointer flex gap-1 items-center"
        >
          <span>
            <AiOutlineUsergroupAdd />{" "}
          </span>
          Create Group
        </h3>
      </div>
      <Input
        classNames={{
          base: "max-w-full  h-10 rounded-full ",
          mainWrapper: "h-full",
          input: "text-small",
          innerWrapper: "border-0",
          inputWrapper: "h-full font-normal bg-white/60 ",
        }}
        radius="full"
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

export default SearchUser;
