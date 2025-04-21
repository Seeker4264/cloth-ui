import React, { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./../../styles.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeOnBackdropClick?: boolean;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnBackdropClick = true,
  children,
}) => {
  const animations = {
    overlay: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.2 } },
    },
    container: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 20,
          stiffness: 500,
        },
      },
      exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    },
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
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={animations.overlay.hidden}
          animate={animations.overlay.visible}
          exit={animations.overlay.exit}
          className="fixed top-0 left-0 z-[100] w-full h-full flex items-center justify-center backdrop-blur-[4px] bg-[#888888]/65 dark:bg-[#222222]/65 !mt-0"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={animations.container.hidden}
            animate={animations.container.visible}
            exit={animations.container.exit}
            className="relative bg-[#FFFFFF] dark:bg-[#383E4E] shadow-2xl min-w-[10rem] w-fit min-h-[8rem] h-fit p-6 rounded-[2rem]"
            onClick={stopPropagation}
          >
            <button
              className="group absolute z-[20] right-0 top-0 p-1 m-5 w-fit rounded-full cursor-pointer bg-[#FFFFFF] dark:bg-[#383E4E]
              hover:bg-[#D4E3FF] dark:hover:bg-[#3E4D81]
              active:bg-[#AECAFF] dark:active:bg-[#3c4f90]
              duration-150"
              onClick={handleBackdropClick}
            >
              <svg
                className="size-7 text-[#333333] dark:text-white
                group-hover:text-[#003EAA] dark:group-hover:text-[#78A6F6]
                duration-150"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
