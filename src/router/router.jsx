import { createBrowserRouter } from "react-router-dom";
import Chat from "../layout/Chat";
import MessageContainer from "../page/chat/MessageContainer";
import AuthLayout from "../layout/AuthLayout";
import PrivetRoute from "./PrivetRoute";
import DefaultChatBox from "../components/DefaultChatBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivetRoute>
        <Chat />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/",
        element: <DefaultChatBox />,
      },
      {
        path: "/chat/:id",
        element: <MessageContainer />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
  },
]);

export default router;
