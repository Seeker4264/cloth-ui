import React, { useState } from "react";
import { Button } from "#components/button/index.tsx";
import { Modal } from "#components/modal/index.tsx";

export interface ModalExampleProps {
  variant: "primary" | "secondary";
  closeOnBackdropClick?: boolean;
}

const ModalExample: React.FC<ModalExampleProps> = ({
  variant = "primary",
  closeOnBackdropClick = true,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        disabled={false}
        text={"Submit"}
        onClick={() => setShowModal((e) => !e)}
        variant="primary"
      />
      <Modal
        variant={variant}
        isOpen={showModal}
        closeOnBackdropClick={closeOnBackdropClick}
        onClose={() => setShowModal(false)}
      >
        <h2>Hello World!</h2>
      </Modal>
    </>
  );
};

export default ModalExample;
