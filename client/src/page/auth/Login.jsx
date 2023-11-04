import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({ setSelected }) => {
  const [isVisible, setIsVisible] = useState(false);
  //   const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="underlined"
        className="text-white border-white"
        classNames={{
          label: "text-white/80",
        }}
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="underlined"
        className="text-white border-white"
        classNames={{
          label: "text-white/80",
        }}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />

      <p className="text-center text-small text-white">
        Need to create an account?{" "}
        <Link
          size="sm"
          className="text-violet-500 underline"
          onPress={() => setSelected("sign-up")}
        >
          Sign up
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
