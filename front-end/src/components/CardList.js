import React, { useState, useMemo, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { FormControlLabel, Checkbox } from "@mui/material";
import cards from "../assetts/CardsData";

export default function CardList() {
  const [hideOutOfStock, setHideOutOfStock] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const filteredCards = useMemo(() => {
    let sortedCards = [...cards];

    switch (sortBy) {
      case "price":
        sortedCards.sort((a, b) => a.price - b.price);
        break;
      case "price-reverse":
        sortedCards.sort((a, b) => b.price - a.price);
        break;
      case "availability":
        sortedCards.sort((a, b) => b.inStock - a.inStock);
        break;
      default:
        break;
    }

    return sortedCards.filter(
      (card) =>
        card.inStock || !hideOutOfStock // Show out of stock items if hideOutOfStock is false
      ).filter((card) =>
        `${card.name} ${card.price} ${card.brand}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
  }, [sortBy, hideOutOfStock, searchTerm]);

  useEffect(() => {
    setSearchTerm("");
    setSortBy("none");
  }, [hideOutOfStock]);

  const handleSearch = (searchTerm, sortBy) => {
    setSearchTerm(searchTerm);
    setSortBy(sortBy);
  };

  const renderCards = () => {
    return filteredCards.map((card) => (
      <Card key={card.name} {...card} style={{ display: "inline-block" }}/>
    ));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar items={cards} onSearch={handleSearch} />
        <FormControlLabel
          control={
            <Checkbox
              checked={hideOutOfStock}
              onChange={(e) => setHideOutOfStock(e.target.checked)}
            />
          }
          label="Hide out of stock"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {renderCards()}
      </div>
    </div>
  );
}
