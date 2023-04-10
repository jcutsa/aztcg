import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cards from "../assetts/CardsData";

function SingleCard() {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    const targetCard = cards.filter((card) => card.id === cardId);
    setCard(targetCard[0]);
  }, [cardId]);

  return (
    <div style={{ padding: "24px 48px", textAlign: "center" }}>
      <p>
        {card.name}
        <img
          src={card.image}
          alt={card.name}
          style={{ width: "30%", height: "auto" }}
        />
      </p>
    </div>
  );
}

export default SingleCard;
