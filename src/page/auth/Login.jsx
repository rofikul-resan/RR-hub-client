import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getToken, serverUrl } from "../../utils";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Rtk/slice/userSlice";

const Login = ({ setSelected, setAuthErr }) => {
  // react hook form
  const { register, reset, handleSubmit } = useForm();

  const dispatch = useDispatch();

  // state
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const login = (data) => {
    setLoading(true);
    axios
      .post(`${serverUrl}/user/login`, data)
      .then((res) => {
        const token = getToken({ email: data.email });
        console.log(token);
        setLoading(false);
        dispatch(updateUser(res.data));
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setAuthErr(err?.response?.data?.error);
      });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(login)}>
      <Input
        {...register("email", { required: true })}
        autoComplete="off"
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
        {...register("password", { required: true })}
        autoComplete="off"
        isRequired
        label="Password"
        placeholder="Enter your password"
        type={!isVisible ? "password" : "text"}
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
        <Button fullWidth color="primary" type="submit" isLoading={loading}>
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
