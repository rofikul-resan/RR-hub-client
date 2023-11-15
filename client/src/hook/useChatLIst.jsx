import { useGetChatUserQuery } from "../Rtk/query/messageApi";
import { useSelector } from "react-redux";

const useChatLIst = () => {
  const user = useSelector((state) => state.user);

  const { data, isLoading, refetch } = useGetChatUserQuery(user._id);
  return { data, isLoading, refetch };
};

export default useChatLIst;
