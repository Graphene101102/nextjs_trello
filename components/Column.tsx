import React from 'react';
import { Column as ColumnType, Card as CardType } from '@/actions/initialData';
import Card from '@/components/Card';

type ColumnProps = {
  column: ColumnType;
  cards: CardType[];
};

const Column = ({ column, cards }: ColumnProps) => {
  return (
    <div>
      <h2>{column.title}</h2>
      <div>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;