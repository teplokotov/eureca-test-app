import styles from './house.module.scss';
import Table from '../ui/table/table';
import ControlButton from '../ui/control-button/control-button';

type TProps = {
  id: number
}

function House({ id }: TProps) {
  return (
    <section className={styles.house}>
      <div className={styles.house__header}>
        <h2 className={styles.house__heading}>Дом {id}</h2>
        <div className={styles.house__controls}>
          <ControlButton type='trash' />
          <ControlButton type='add' />
        </div>
      </div>
      <Table />
    </section>
  )
}

export default House
