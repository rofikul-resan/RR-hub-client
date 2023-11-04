import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector((st) => st.user);
  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth"} state={location.pathname} />;
  }
};

export default PrivetRoute;
