import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TestModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#1a1a1a',
            border: 'none',
            borderRadius: '10px',
            padding: '20px',
            color: 'white', // Ensure text color is readable
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Some content for the modal</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default TestModal;
