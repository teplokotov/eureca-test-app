import styles from './house.module.scss';
import { house } from '../../constants';
import React, { useState } from 'react';
import Table, { TData } from '../ui/table/table';
import ControlButton from '../ui/control-button/control-button';
import Modal from '../modal/modal';
import Menu from '../menu/menu';

export type TCoords = {
  left: number
  top: number
}

type TProps = {
  id: number
}

function House({ id }: TProps) {
  const [coords, setCoords] = useState<TCoords>({ left: 0, top: 0 });
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [dataTable, setDataTable] = useState<TData[]>([]);

  function updateCoords(button: HTMLElement) {
    const rect = button.getBoundingClientRect();
    setCoords({
      left: rect.x + rect.width + 20,
      top: rect.y
    });
  }

  function handleOnClickAdd(e: React.MouseEvent<Element, MouseEvent>) {
    updateCoords(e.target as HTMLElement);
    setIsHidden(!isHidden);
  }

  function handleOnClickDelete() {
    setDataTable([]);
  }

  return (
    <>
      <section className={styles.house}>
        <div className={styles.house__header}>
          <h2 className={styles.house__heading}>{house} {id}</h2>
          <div className={styles.house__controls}>
            <ControlButton
              type='trash'
              onClick={handleOnClickDelete}
            />
            <ControlButton
              type='add'
              onClick={(e) => handleOnClickAdd(e)}
            />
          </div>
        </div>
        <Table data={dataTable} />
      </section>
      <Modal
        isHidden={isHidden}
        coords={coords}
        closeModal={() => setIsHidden(true)}
      >
        <Menu
          houseId={id}
          closeModal={() => setIsHidden(true)}
          dataTable={dataTable}
          setDataTable={setDataTable}
        />
      </Modal>
    </>
  )
}

export default House
