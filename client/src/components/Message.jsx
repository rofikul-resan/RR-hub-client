import { AiOutlineCheck } from "react-icons/ai";

const Message = () => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <div className=" py-1 px-3 rounded-md bg-violet-700/40 backdrop-blur-sm max-w-xl">
          <h3 className="capitalize font-semibold  text-orange-300">resan</h3>
          <p className="text-sm"> hi , resan how are you?</p>
        </div>
        <div className="rounded-full h-3 w-3 bg-orange-700 flex items-center justify-center mt-auto ">
          <AiOutlineCheck className="text-[10px]" />
        </div>
      </div>
      <div className="flex justify-start max-w-2xl gap-2">
        <div className=" py-1 px-3 rounded-md backdrop-blur-2xl max-w-xl">
          <h3 className="capitalize font-semibold  text-orange-300  mb-2">
            resan
          </h3>
          <p className="text-sm">
            {" "}
            Note: Make sure to pass the aria-label prop when the label prop is
            not provided. This is required for accessibility. Sizes Preview Code
            Colors Preview Code Indeterminate You can use the isIndeterminate
            prop to display an indeterminate progress bar. This is useful when
            you dont know how long an operation will take. Preview Code Striped
            Preview Code With Label Preview Code
          </p>
        </div>
        <div className="rounded-full h-3 w-3 bg-orange-700 flex items-center justify-center mt-auto ">
          <AiOutlineCheck className="text-[10px]" />
        </div>
      </div>
    </>
  );
};

export default Message;
