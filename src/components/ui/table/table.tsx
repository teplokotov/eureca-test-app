import { numberOfEntrance, numberOfFlat } from '../../../constants';
import styles from './table.module.scss';

function Table() {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__row}>
          <th className={styles.table__heading}>{numberOfEntrance}</th>
          <th className={styles.table__heading}>{numberOfFlat}</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.table__row}>
          <td className={styles.table__cell}>1</td>
          <td className={styles.table__cell}>1</td>
        </tr>
        <tr className={styles.table__row}>
          <td className={styles.table__cell}>2</td>
          <td className={styles.table__cell}>2</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
