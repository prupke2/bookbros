import React from "react";
import './BookModal.scss';

const CloseModalButton = ({ setModalOpen, type }) => (
  <div className={`close-button-wrapper ${type === 'rating-form' && 'adjust-position'}`}>
    <button className="close-modal" onClick={() => setModalOpen(false)}>
      x
    </button>
  </div>
);

export default CloseModalButton;
