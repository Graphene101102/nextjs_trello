import React from 'react';
import { Card as CardType } from '@/actions/initialData';

type CardProps = {
  card: CardType;
};

const Card = ({ card }: CardProps) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
    </div>
  );
};

export default Card;