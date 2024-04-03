import styles from './control-button.module.scss';

type TProps = {
  type: 'add' | 'trash'
}

function ControlButton({ type }: TProps) {
  return (
    <button className={`${styles.button} ${styles[`button__${type}`]}`}></button>
  )
}

export default ControlButton
