import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import Login from "../page/auth/Login";
import SingUp from "../page/auth/SingUp";

const AuthLayout = () => {
  const [selected, setSelected] = useState("login");
  return (
    <div className="flex flex-col w-1/2 mx-auto mt-10 h-full">
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
              <Login setSelected={setSelected} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SingUp setSelected={setSelected} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default AuthLayout;
