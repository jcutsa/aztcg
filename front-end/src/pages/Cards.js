import React from "react";
import CardList from "../components/CardList";

function Cards() {
  return (
    <div
      style={{
        padding: "24px 48px",
        textAlign: "center",
        // overflowY: "scroll",
        height: "100vh",
      }}
    >
      <h1>Trading Cards</h1>
      <CardList />
    </div>
  );
}

export default Cards;
