import React from 'react';

const ResumeModal = ({ setShowModal }) => {
  return (
    <div className="modal__background">
      <div className="modal__container">Hello world!</div>
      <div className="close__icon" onClick={() => setShowModal(false)}>
        X
      </div>
    </div>
  );
};

export default ResumeModal;
