import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "../Rtk/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>;
    </Provider>
  );
};

export default Providers;
