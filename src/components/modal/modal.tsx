import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { TCoords } from '../house/house';

type TProps = {
  children?: React.ReactNode;
  isHidden?: boolean;
  coords: TCoords;
}

function Modal({ children, isHidden, coords }: TProps) {

  // const dispatch = useAppDispatch();
  // const { isHidden } = useAppSelector((store) => store.modal);
  // const isHidden = false;

  function handleOnClose() {
    // dispatch({ type: CLOSE_MODAL });
    console.log('clicked close');
  }

  useEffect(() => {
    if (isHidden) return;

    function handleOnPressEsc(e: KeyboardEvent) {
      if(e.key === 'Escape') {
        console.log('press ESC');
        // dispatch({ type: CLOSE_MODAL });
      }
    }

    document.addEventListener('keydown', handleOnPressEsc);
    return () => {
      document.removeEventListener('keydown', handleOnPressEsc);
    };

  }, [isHidden]);

  return createPortal(
    isHidden ?
      <></> :
      <>
        {/* <ModalOverlay onClose={handleOnClose} /> */}
        <div className={styles.modal} style={{ top: coords.top, left: coords.left }}>
          <section>
            <button className={styles.button} onClick={handleOnClose}>x</button>
          </section>
          {children}
        </div>
      </>,
    document.getElementById("modals") as Element
  );
}

export default Modal
