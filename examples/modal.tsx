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
        <Button
          disabled={false}
          text={"Close Modal"}
          onClick={() => setShowModal(false)}
          variant="secondary"
        />
      </Modal>
    </>
  );
};

export default ModalExample;
