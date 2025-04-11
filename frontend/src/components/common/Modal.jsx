import React from 'react';

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
          <h4>{title}</h4>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;