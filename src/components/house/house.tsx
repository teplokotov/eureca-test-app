import React, { useState } from 'react';
import styles from './house.module.scss';
import Table from '../ui/table/table';
import ControlButton from '../ui/control-button/control-button';
import { house } from '../../constants';

import Modal from '../modal/modal';

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

  return (
    <>
      <section className={styles.house}>
        <div className={styles.house__header}>
          <h2 className={styles.house__heading}>{house} {id}</h2>
          <div className={styles.house__controls}>
            <ControlButton type='trash' />
            <ControlButton
              type='add'
              onClick={(e) => handleOnClickAdd(e)}
            />
          </div>
        </div>
        <Table />
      </section>
      <Modal
        isHidden={isHidden}
        coords={coords}
      >Test</Modal>
    </>
  )
}

export default House
