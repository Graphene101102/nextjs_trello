import React from 'react';
import { Board as BoardType } from '@/actions/initialData';
import Column from '@/components/Column';

type BoardProps = {
  board: BoardType;
};

const Board = ({ board }: BoardProps) => {
  return (
    <div className="board">
      {board.columns.map(column => (
        <Column key={column.id} column={column} cards={column.cards} />
      ))}
    </div>
    
  );
};

export default Board;