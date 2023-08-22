import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./Modal.css";

function Modal({ isOpen, closeModal }) {
  return (
    isOpen && (
      <div className="modal">
        <p>reservation successfull!!</p>
        <button className="close-button" onClick={closeModal}>
          <RiCloseLine />
        </button>
      </div>
    )
  );
}

export default Modal;
