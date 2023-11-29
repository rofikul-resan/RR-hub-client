import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import DefaultChatBox from "../components/DefaultChatBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../utils";
import { updateUser } from "../Rtk/slice/userSlice";

const PrivetRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((st) => st.user);
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    setLoading(true);
    if (token) {
      axios
        .get(`${serverUrl}/user/logged-user`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(updateUser(res.data));
          console.log("prv", res.data);
        })
        .catch((err) => {
          localStorage.removeItem("auth-token");
          setLoading(false);
          console.log(err);
        });
    } else {
      setLoading(false);
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <DefaultChatBox />;
  } else {
    if (user && !loading) {
      return children;
    } else {
      return <Navigate to={"/auth"} state={location.pathname} />;
    }
  }
};

export default PrivetRoute;
