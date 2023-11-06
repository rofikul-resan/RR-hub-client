import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "../Rtk/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="h-full">
        <NextUIProvider className="h-full">{children}</NextUIProvider>
      </div>
    </Provider>
  );
};

export default Providers;
