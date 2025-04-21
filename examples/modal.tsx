import React, { useState } from "react";
import { Button, Modal } from "#main";

interface ModalExampleProps {
  dark?: boolean;
  closeOnBackdropClick?: boolean;
}

const ModalExample: React.FC<ModalExampleProps> = ({
  dark = false,
  closeOnBackdropClick = true,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <Button
        disabled={false}
        text={"Submit"}
        onClick={() => setShowModal(true)}
        variant="primary"
      />
      <Modal
        isOpen={showModal}
        closeOnBackdropClick={closeOnBackdropClick}
        onClose={() => setShowModal(false)}
      >
        <div className="flex flex-col justify-center items-center gap-5 w-[12rem] h-[10rem]">
          <h1 className="text-2xl font-semibold mt-4 text-[#333] dark:text-white">
            This is a Modal
          </h1>
          <Button
            disabled={false}
            text={"Close Modal"}
            onClick={() => setShowModal(false)}
            variant="secondary"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
