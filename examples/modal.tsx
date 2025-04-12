import React, { useState } from "react";
import { Button } from "#components/button/index.tsx";
import { Modal } from "#components/modal/index.tsx";

export interface ModalExampleProps {
  closeOnBackdropClick?: boolean;
}

const ModalExample: React.FC<ModalExampleProps> = ({
  closeOnBackdropClick = true,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
        <div className="grid place-items-center w-[12rem] h-[10rem]">
          <Button
            disabled={false}
            text={"Close Modal"}
            onClick={() => setShowModal(false)}
            variant="secondary"
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalExample;
