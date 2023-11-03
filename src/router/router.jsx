import { createBrowserRouter } from "react-router-dom";
import Chat from "../layout/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
]);

export default router;
