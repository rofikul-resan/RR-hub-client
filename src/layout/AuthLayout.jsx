import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Login from "../page/auth/Login";
import SingUp from "../page/auth/SingUp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const [selected, setSelected] = useState("login");
  const [authErr, setAuthErr] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="flex flex-col w-1/2 mx-auto mt-10 h-full">
      {authErr && (
        <div className="bg-red-700/70 py-2 w-full fixed top-0 left-0">
          <p className="text-center font-semibold">{authErr}</p>
        </div>
      )}
      <Card className="max-w-full bg-transparent backdrop-blur py-5 shadow-md shadow-white/30 border border-white/40 ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            radius="full"
            variant="bordered"
            color="primary"
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
            className="w-1/2 mx-auto mb-7"
            classNames={{
              tab: "text-xl py-4",
            }}
          >
            <Tab key="login" title="Login">
              <Login setSelected={setSelected} setAuthErr={setAuthErr} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SingUp setSelected={setSelected} setAuthErr={setAuthErr} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthLayout;
