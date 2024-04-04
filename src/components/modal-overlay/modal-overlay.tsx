import React from 'react';
import styles from './modal-overlay.module.scss';

type TProps = {
  onClose: () => void,
};

function ModalOverlay({ onClose }: TProps) {

  React.useEffect(() => {

    function handleOnClick(e: MouseEvent | TouchEvent) {
      const el = e.target as Element;
      if(el.classList.contains(styles.overlay)) onClose();
    }

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };

  }, [onClose]);

  return (
    <div className={styles.overlay}></div>
  );
}

export default ModalOverlay
