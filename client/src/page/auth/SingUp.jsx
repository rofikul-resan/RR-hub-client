import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getToken, serverUrl } from "../../utils";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Rtk/slice/userSlice";

const SingUp = ({ setSelected, setAuthErr }) => {
  // react hook from
  const { register, reset, handleSubmit } = useForm();

  //use hook
  const dispatch = useDispatch();

  //state
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [userImageErr, setUserImageErr] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // image validate
  const validateImage = (value) => {
    if (!value) {
      return "Image is required";
    }
    if (!value.type.includes("image")) {
      return "Invalid image format. Please upload a image.";
    }
    if (value.size > 2000000) {
      return "Image size exceeds the 2MB limit.";
    }
    return false;
  };

  const changeImage = (image) => {
    setUserImageErr("");
    const errorMessage = validateImage(image);
    console.log(errorMessage);
    if (errorMessage) {
      setImageFile(null);
      return setUserImageErr(errorMessage);
    } else {
      setImageFile(image);
    }
  };

  const singUp = async (data) => {
    setLoading(true);
    let userPhoto;
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_token}`,
        formData
      );
      userPhoto = res.data.data.display_url;
    }
    // image uploading complete

    const user = { ...data, userPhoto: userPhoto || null };
    console.log(user);
    axios
      .post(`${serverUrl}/user/create-user`, user)
      .then((res) => {
        const token = getToken({ email: data.email });
        console.log(token);
        dispatch(updateUser(res.data));
        setLoading(false);
        reset();
        setImageFile(null);
        setAuthErr("");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setAuthErr(err?.response?.data?.error);
      });
  };
  return (
    <form onSubmit={handleSubmit(singUp)} className="flex flex-col gap-4 ">
      <Input
        {...register("name", { required: true })}
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="underlined"
        className="text-white border-white"
        classNames={{
          label: "text-white/80",
        }}
      />
      <Input
        {...register("email", { required: true })}
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

      <label htmlFor="userImage">
        {" "}
        <div className="flex flex-col items-center justify-center pt-2 mt-6 border border-gray-600 rounded-md">
          <svg
            className="w-8 h-8 text-white dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-white dark:text-gray-400">
            <span className="font-semibold">
              {imageFile ? imageFile?.name : "Click to upload"}
            </span>{" "}
            User Image
          </p>
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        id="userImage"
        className="hidden"
        onChange={(e) => changeImage(e.target.files[0])}
      />
      {userImageErr && (
        <p className="text-red-600 font-semibold text-sm">{userImageErr}</p>
      )}
      <p className="text-center text-small text-white">
        Already have an account?{" "}
        <Link
          size="sm"
          className="text-violet-500 underline"
          onPress={() => setSelected("login")}
        >
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={loading}>
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SingUp;
