import { noData, numberOfEntrance, numberOfFlat } from '../../../constants';
import styles from './table.module.scss';

export type TData = {
  house: number
  entrance: number[]
  flat: number[]
}

type TProps = {
  data: TData[]
}

function Table({ data }: TProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__row}>
          <th className={styles.table__heading}>{numberOfEntrance}</th>
          <th className={styles.table__heading}>{numberOfFlat}</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length === 0 ?
            <tr className={styles.table__row}>
              <td className={styles.table__cell} colSpan={2}>{noData}</td>
            </tr> :
          data.map((item) => {
            return item.entrance.map((row, index) => {
              return (
                <tr className={styles.table__row} key={index}>
                  <td className={styles.table__cell}>{row}</td>
                  <td className={styles.table__cell}>{item.flat.join(', ')}</td>
                </tr>
              )
            })
          })
        }
      </tbody>
    </table>
  )
}

export default Table
