import { ReactNode, useEffect } from "react";
import "./../../styles.css";

export interface ModalProps {
  variant: "primary" | "secondary";
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdropClick?: boolean;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  variant = "primary",
  isOpen,
  onClose,
  closeOnBackdropClick = true,
  children,
}) => {
  const modalClass = {
    primary: "bg-blue-300 size-20",
    secondary: "bg-red-300 size-20",
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <section
          className="bg-gray-600 p-8 w-fit"
          onClick={handleBackdropClick}
        >
          <div className={modalClass[variant]} onClick={stopPropagation}>
            {children}
          </div>
        </section>
      )}
    </>
  );
};
