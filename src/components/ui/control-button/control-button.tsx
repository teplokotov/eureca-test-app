import { MouseEvent } from 'react';
import styles from './control-button.module.scss';

type TProps = {
  type: 'add' | 'trash';
  onClick?: (e: MouseEvent) => void;
}

function ControlButton({ type, onClick }: TProps) {
  return (
    <button
      type='button'
      className={`${styles.button} ${styles[`button__${type}`]}`}
      onClick={(e) => onClick && onClick(e)}
    ></button>
  )
}

export default ControlButton
