import React from "react";
import './BookModal.scss';

const CloseModalButton = ({ setModalOpen }) => (
  <div className="close-button-wrapper">
    <button className="close-modal" onClick={() => setModalOpen(false)}>
      x
    </button>
  </div>
);

export default CloseModalButton;
