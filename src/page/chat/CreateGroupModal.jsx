import { Modal, ModalContent } from "@nextui-org/react";

const CreateGroupModal = ({ onOpenChange, isOpen }) => {
  return (
    <Modal
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      scrollBehavior="outside"
      backdrop="blur"
    >
      <ModalContent className="p-6">
        <h1 className="h-52">hi</h1>
      </ModalContent>
    </Modal>
  );
};

export default CreateGroupModal;
