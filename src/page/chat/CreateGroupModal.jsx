import {
  Avatar,
  Button,
  Input,
  Modal,
  ModalContent,
  link,
} from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";

const CreateGroupModal = ({ onOpenChange, isOpen }) => {
  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      scrollBehavior="outside"
      backdrop="blur"
    >
      <ModalContent className="p-6">
        <div className="w-fit mx-auto mb-2 hover:underline cursor-pointer ">
          <div className="flex  flex-col hover:border-zinc-200 hover:border-2 hover:rounded-lg p-2 duration-100">
            <div className="relative">
              <Avatar className="mx-auto" />
              <span className="absolute right-[45px] z-30 bottom-0">
                <IoMdAddCircle />
              </span>
            </div>
            <h1 className="font-bold "> Add group Image </h1>
          </div>
        </div>
        <Input type="text" placeholder="Your group name" radius="full" />
      </ModalContent>
    </Modal>
  );
};

export default CreateGroupModal;
