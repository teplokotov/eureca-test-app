import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { TCoords } from '../house/house';

type TProps = {
  children?: React.ReactNode;
  isHidden?: boolean;
  coords: TCoords;
  closeModal: () => void;
}

function Modal({ children, isHidden, coords, closeModal }: TProps) {

  useEffect(() => {
    if (isHidden) return;

    function handleOnPressEsc(e: KeyboardEvent) {
      if(e.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', handleOnPressEsc);
    return () => {
      document.removeEventListener('keydown', handleOnPressEsc);
    };

  }, [closeModal, isHidden]);

  return createPortal(
    isHidden ?
      <></> :
      <>
        <ModalOverlay onClose={closeModal} />
        <div className={styles.modal} style={coords}>
          {children}
        </div>
      </>,
    document.getElementById("modals") as Element
  );
}

export default Modal
