import React from "react";
import Card from "./Card";

export default function CardList() {
  const cards = [
    {
      name: "Solemn Judgment - Maze of Memories (MAZE)",
      image: require("./images/card1.jpg"),
      price: 2.24,
    },
    {
      name: "Nibiru, the Primal Being - 2022 Tin of the Pharaoh's Gods (MP22)",
      image: require("./images/card2.jpg"),
      price: 4.01,
    },
    {
      name: "Labyrinth Heavy Tank - Maze of Memories (MAZE)",
      image: require("./images/card3.jpg"),
      price: 0.40,
    },
  ];

  return (
    <div style={{ display: "flex", width: "400px", height: "400px"}}>
      {cards.map((card) => (
        <Card key={card.name} {...card} style={{ display: "inline-block" }} />
      ))}
    </div>
  );
}
