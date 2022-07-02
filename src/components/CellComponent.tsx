import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import './CellComponent.scss'
interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }): JSX.Element => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : '', (cell.available && cell.figure) ? 'available_attack' : ''].join(' ')}
      onClick={() => click(cell)}

    >
      {cell.available && !cell.figure && <div className={'available_move'}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div >
  );
};

export default CellComponent;