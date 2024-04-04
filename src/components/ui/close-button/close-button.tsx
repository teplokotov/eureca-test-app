import { MouseEvent } from 'react';
import styles from './close-button.module.scss';

type TProps = {
  onClick?: (e: MouseEvent) => void;
}

function CloseButton({ onClick }: TProps) {
  return (
    <button
      type='button'
      className={styles.button}
      onClick={(e) => onClick && onClick(e)}
    ></button>
  )
}

export default CloseButton
