import React from "react";
import './BookModal.scss';

const CloseModalButton = ({ setIsModalOpen, type }) => (
  <div className={`close-button-wrapper ${type === 'rating-form' && 'adjust-position'}`}>
    <button className="close-modal" onClick={() => setIsModalOpen(false)}>
      x
    </button>
  </div>
);

export default CloseModalButton;
