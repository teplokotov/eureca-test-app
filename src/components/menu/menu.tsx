import { createRef, useEffect, useState } from 'react';
import { addText, countOfEntrances, countOfFlats, entrance, flat, numberOfEntrance, numberOfFlat } from '../../constants';
import Button from '../ui/button/button';
import CloseButton from '../ui/close-button/close-button';
import styles from './menu.module.scss';
import { TData } from '../ui/table/table';

type TCurrentMenu = 'entrances' | 'flats';

type TProps = {
  houseId: number;
  closeModal: () => void;
  dataTable: TData[];
  setDataTable: (data: TData[]) => void;
}

function Menu({ houseId, closeModal, dataTable, setDataTable }: TProps) {
  const entrances = [...Array(countOfEntrances)];
  const flats = [...Array(countOfFlats)];

  const formRef = createRef<HTMLFormElement>();
  const [isFlatsHidden, setIsFlatsHidden] = useState<boolean>(true);
  const [currentMenu, setCurrentMenu] = useState<TCurrentMenu>('entrances');
  const [currentEntrancesId, setCurrentEntrancesId] = useState<number>(0);
  const [currentFlatsId, setCurrentFlatsId] = useState<number>(0);

  useEffect(() => {

    function handleOnKeyDown(e: KeyboardEvent) {
      if(!isFlatsHidden && e.ctrlKey && e.key === 'Enter') {
        formRef.current?.requestSubmit();
      }
      if(!isFlatsHidden && e.key === 'Tab') {
        e.preventDefault();
      }
      if(e.key === 'ArrowDown') {
        if(currentEntrancesId === 0){
          setCurrentEntrancesId(1);
        } else if (currentMenu === 'entrances' && currentEntrancesId < countOfEntrances) {
          setCurrentEntrancesId((prev) => prev + 1);
        } else if (currentMenu === 'flats' && currentFlatsId < countOfFlats) {
          setCurrentFlatsId((prev) => prev + 1);
        }
      }
      if(e.key === 'ArrowUp') {
        if (currentMenu === 'entrances' && currentEntrancesId > 1) {
          setCurrentEntrancesId((prev) => prev - 1);
        } else if (currentMenu === 'flats' && currentFlatsId > 1) {
          setCurrentFlatsId((prev) => prev - 1);
        }
      }
      if(e.key === 'ArrowRight' && isFlatsHidden && currentMenu === 'entrances') {
        setIsFlatsHidden(false);
        setCurrentMenu('flats');
        setCurrentFlatsId(0);
      }
      if(e.key === 'ArrowLeft' && !isFlatsHidden && currentMenu === 'flats') {
        setIsFlatsHidden(true);
        setCurrentMenu('entrances');
      }
      if(e.key === 'Enter') {
        if (currentMenu === 'entrances' && currentEntrancesId <= countOfEntrances && currentEntrancesId > 0) {
          const selector = `section:nth-child(1) > ul > li:nth-child(${currentEntrancesId}) > label > input`;
          const inputElement = formRef.current?.querySelector(selector);
          if(inputElement?.getAttribute('checked') === 'true') {
            inputElement?.removeAttribute('checked');
          } else {
            inputElement?.setAttribute('checked', 'true');
            openFlatsMenu();
          }
        }
        if (currentMenu === 'flats' && currentFlatsId <= countOfFlats && currentFlatsId > 0) {
          const selector = `section:nth-child(2) > ul > li:nth-child(${currentFlatsId}) > label > input`;
          const inputElement = formRef.current?.querySelector(selector);
          if(inputElement?.getAttribute('checked') === 'true') {
            inputElement?.removeAttribute('checked');
          } else {
            inputElement?.setAttribute('checked', 'true');
          }
        }
      }
    }

    document.addEventListener('keydown', handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    };

  }, [currentEntrancesId, currentFlatsId, currentMenu, formRef, isFlatsHidden]);

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

  function openFlatsMenu() {
    setIsFlatsHidden(false);
    setCurrentMenu('flats');
  }

  function closeFlatsMenu() {
    setIsFlatsHidden(true);
    setCurrentMenu('entrances');
  }

  return (
    <form className={styles.menu} onSubmit={handleOnSubmit} ref={formRef}>
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
                <li className={styles.menu__item} key={index} onClick={openFlatsMenu}>
                  <label>
                    <input className={styles.menu__input} type='checkbox' name={`entrance-${id}`} value={id} hidden/>
                    <span className={`${styles.menu__span} ${currentEntrancesId === id && styles.menu__span_current}`}>{entrance} {id}</span>
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
            <CloseButton onClick={closeFlatsMenu} />
          </div>
          <ul className={styles.menu__content}>
            {
              flats.map((_, index) => {
                const id = index + 1;
                return (
                  <li className={styles.menu__item} key={index}>
                    <label>
                      <input className={styles.menu__input} type='checkbox' name={`flat-${id}`} value={id} hidden/>
                      <span className={`${styles.menu__span} ${currentFlatsId === id && styles.menu__span_current}`}>{flat} {id}</span>
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
