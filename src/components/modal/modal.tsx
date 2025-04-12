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
    primary: "bg-[#FFFFFF] shadow-2xl w-[50dvw] h-[60dvh] p-5 rounded-[2rem]",
    secondary: "bg-[#EEEEEE] shadow-2xs w-[50dvw] h-[60dvh] p-5 rounded-[2rem]",
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
          className="fixed top-0 left-0 z-[100] w-full h-full flex items-center justify-center backdrop-blur-[8px] bg-[#888888]/65 !mt-0"
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
