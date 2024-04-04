import { MouseEvent } from 'react';
import styles from './button.module.scss';

type TProps = {
  onClick?: (e: MouseEvent) => void;
  type?: 'button' | 'submit';
  children?: React.ReactNode;
}

function Button({ onClick, type, children }: TProps) {
  return (
    <button
      type={type ? type : 'button'}
      className={styles.button}
      onClick={(e) => onClick && onClick(e)}
    >{children}</button>
  )
}

export default Button
