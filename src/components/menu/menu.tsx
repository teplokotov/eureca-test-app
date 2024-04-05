import { useState } from 'react';
import { addText, countOfEntrances, countOfFlats, entrance, flat, numberOfEntrance, numberOfFlat } from '../../constants';
import Button from '../ui/button/button';
import CloseButton from '../ui/close-button/close-button';
import styles from './menu.module.scss';
import { TData } from '../ui/table/table';

type TProps = {
  houseId: number;
  closeModal: () => void;
  dataTable: TData[];
  setDataTable: (data: TData[]) => void;
}

function Menu({ houseId, closeModal, dataTable, setDataTable }: TProps) {
  const entrances = [...Array(countOfEntrances)];
  const flats = [...Array(countOfFlats)];

  const [isFlatsHidden, setIsFlatsHidden] = useState<boolean>(true);

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const formFlats: number[] = [];
    const formEntrances: number[] = [];

    for(const key in formJson) {
      if(key.toString().includes('entrance')) formEntrances.push(Number(formJson[key]));
      if(key.toString().includes('flat')) formFlats.push(Number(formJson[key]));
    }

    setDataTable([
      ...dataTable,
      {
        house: houseId,
        entrance: formEntrances,
        flat: formFlats
      }
    ])

    closeModal();
  }

  return (
    <form className={styles.menu} onSubmit={handleOnSubmit}>
      <section className={styles.menu__section}>
        <div className={styles.menu__header}>
          <h2 className={styles.menu__heading}>{numberOfEntrance}</h2>
          <CloseButton onClick={() => closeModal()}/>
        </div>
        <ul className={styles.menu__content}>
          {
            entrances.map((_, index) => {
              const id = index + 1;
              return (
                <li className={styles.menu__item} key={index} onClick={() => setIsFlatsHidden(false)}>
                  <label>
                    <input className={styles.menu__input} type='checkbox' name={`entrance-${id}`} value={id} hidden/>
                    <span className={styles.menu__label}>{entrance} {id}</span>
                  </label>
                </li>
              )
            })
          }
        </ul>
      </section>
      {
        !isFlatsHidden &&
        <section className={styles.menu__section}>
          <div className={styles.menu__header}>
            <h2 className={styles.menu__heading}>{numberOfFlat}</h2>
            <CloseButton onClick={() => setIsFlatsHidden(true)} />
          </div>
          <ul className={styles.menu__content}>
            {
              flats.map((_, index) => {
                const id = index + 1;
                return (
                  <li className={styles.menu__item} key={index}>
                    <label>
                      <input className={styles.menu__input} type='checkbox' name={`flat-${id}`} value={id} hidden/>
                      <span className={styles.menu__label}>{flat} {id}</span>
                    </label>
                  </li>
                )
              })
            }
            <Button type='submit'>{addText}</Button>
          </ul>
        </section>
      }
    </form>
  )
}

export default Menu
