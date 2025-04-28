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
          className="cl:fixed cl:top-0 cl:left-0 cl:z-[100] cl:w-full cl:h-full cl:flex cl:items-center cl:justify-center cl:backdrop-blur-[4px] cl:bg-[#888888]/65 cl:dark:bg-[#222222]/65 cl:!mt-0"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={animations.container.hidden}
            animate={animations.container.visible}
            exit={animations.container.exit}
            className="cl:relative cl:bg-[#FFFFFF] cl:dark:bg-[#383E4E] cl:shadow-2xl cl:min-w-[10rem] cl:w-fit cl:min-h-[8rem] cl:h-fit cl:p-6 cl:rounded-[2rem] cl:duration-150"
            onClick={stopPropagation}
          >
            <button
              className="cl:group cl:absolute cl:z-[20] cl:right-0 cl:top-0 cl:p-1 cl:m-5 cl:w-fit cl:rounded-full cl:cursor-pointer cl:bg-[#FFFFFF] cl:dark:bg-[#383E4E]
              cl:hover:bg-[#D4E3FF] cl:dark:hover:bg-[#3E4D81]
              cl:active:bg-[#AECAFF] cl:dark:active:bg-[#3c4f90]
              cl:duration-150"
              onClick={handleBackdropClick}
            >
              <svg
                className="cl:size-7 cl:text-[#333333] cl:dark:text-white
                cl:group-hover:text-[#003EAA] cl:dark:group-hover:text-[#78A6F6]
                cl:duration-150"
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
