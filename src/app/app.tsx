import styles from './app.module.scss';
import House from '../components/house/house';
import { countOfHouses } from '../constants';

function App() {
  const houses = [...Array(countOfHouses)];
  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {
          houses.map((_, index) => {
            return (
              <li key={index}>
                <House id={index + 1} />
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default App
