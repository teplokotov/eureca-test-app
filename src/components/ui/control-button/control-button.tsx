import { MouseEvent, createRef } from 'react';
import styles from './control-button.module.scss';

type TProps = {
  type: 'add' | 'trash';
  onClick?: (e: MouseEvent) => void;
}

function ControlButton({ type, onClick }: TProps) {
  const buttonRef = createRef<HTMLButtonElement>();

  function handleOnClick(e: MouseEvent) {
    onClick && onClick(e);
    type === 'add' && buttonRef.current?.blur();
  }

  return (
    <button
      type='button'
      className={`${styles.button} ${styles[`button__${type}`]}`}
      onClick={handleOnClick}
      ref={buttonRef}
    ></button>
  )
}

export default ControlButton
