import { Navigate, createBrowserRouter } from "react-router-dom";
import Chat from "../layout/Chat";
import MessageContainer from "../page/chat/MessageContainer";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
    children: [
      {
        path: "/chat/:id",
        element: <MessageContainer />,
      },
    ],
    errorElement: <Navigate to={"/"} />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
]);

export default router;
