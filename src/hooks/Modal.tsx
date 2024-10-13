import React from "react";
import "./modal.css";

interface ModalProps {
  image: string | null | any;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Modal" className="modal_image" />
        <button className="modal_close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
