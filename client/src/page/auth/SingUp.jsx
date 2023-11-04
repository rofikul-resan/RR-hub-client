import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SingUp = ({ setSelected }) => {
  //state
  const [isVisible, setIsVisible] = useState(false);
  //   const [loading, setLoading] = useState(false);
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
    console.log("img", image);
    const errorMessage = validateImage(image[0]);
    console.log(errorMessage);
    if (errorMessage) {
      setImageFile(null);
      return setUserImageErr(errorMessage);
    } else {
      setImageFile(image);
    }
  };
  return (
    <form className="flex flex-col gap-4 ">
      <Input
        isRequired
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
              {imageFile ? imageFile[0]?.name : "Click to upload"}
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
        required
        onChange={(e) => changeImage(e.target.files)}
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
        <Button fullWidth color="primary">
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SingUp;
