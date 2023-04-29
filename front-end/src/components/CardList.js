import React, { useState, useMemo, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { FormControlLabel, Checkbox } from "@mui/material";
import cards from "../assetts/CardsData";
import { Stack } from "@mui/system";

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

    return sortedCards
      .filter(
        (card) => card.inStock || !hideOutOfStock // Show out of stock items if hideOutOfStock is false
      )
      .filter((card) =>
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
    const cardRows = [];
  
    for (let i = 0; i < filteredCards.length; i += 3) {
      const cardsInRow = filteredCards.slice(i, i + 3);
      const cardRow = (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {cardsInRow.map((card) => (
            <Card key={card.name} {...card} style={{ display: "inline-block" }} />
          ))}
        </div>
      );
      cardRows.push(cardRow);
    }
  
    return cardRows;
  };
  

  return (
    <div>
      <div style={{ textAlign: "center", padding: "16px" }}>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <SearchBar items={cards} onSearch={handleSearch} />
          <FormControlLabel
            control={
              <Checkbox
                checked={hideOutOfStock}
                onChange={(e) => setHideOutOfStock(e.target.checked)}
              />
            }
            label="Hide out of stock"
            style={{ marginLeft: "auto" }}
          />
        </div>
      </div>

      <Stack direction="column" spacing={2}>
        {renderCards()}
      </Stack>
    </div>
  );
}
