// src/components/ConfirmationDialog.js
import React, { useEffect, useRef } from 'react';
import styles from './ConfirmationDialog.module.css';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        tabIndex="-1"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title">Confirm Deletion</h2>
        <p id="dialog-description">Are you sure you want to delete this post?</p>
        <div className={styles.buttons}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm} className={styles.confirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
