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
        <div className="cl:flex cl:flex-col cl:justify-center cl:items-center cl:gap-5 cl:w-[12rem] cl:h-[10rem]">
          <h1 className="cl:text-2xl cl:font-semibold cl:mt-4 cl:text-[#333] cl:dark:text-white">
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
