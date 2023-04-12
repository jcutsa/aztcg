import {
  Card,
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cards from "../assetts/CardsData";

function SingleCard() {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const targetCard = cards.filter((card) => card.id === cardId);
    setCard(targetCard[0]);
  }, [cardId]);

  const handleAddToCart = () => {
    // Handle adding the selected quantity to the cart
    console.log(`Added ${selectedQuantity} ${card.name} to cart // Card id: ${card.id}`);
  };

  const quantityOptions = Array.from(
    { length: card.quantity },
    (_, i) => i + 1
  );

  return (
    <div style={{ padding: "24px 48px", textAlign: "center" }}>
      <p>
        <Stack direction={"row"} flex="wrap" justifyContent={"space-evenly"}>
          <img
            src={card.image}
            alt={card.name}
            style={{ width: "30%", height: "auto" }}
          />
          <Stack direction={"column"}>
            <h2>{card.name}</h2>
            <Card sx={{ padding: "24px" }}>
              <Stack direction={"column"}>
                <h3>${card.price}</h3>
              </Stack>
              {card.inStock ? (
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mt={2}
                >
                  <Select
                    value={selectedQuantity}
                    onChange={(event) =>
                      setSelectedQuantity(event.target.value)
                    }
                    sx={{ width: 120 }} // set the width to 120 pixels
                  >
                    {quantityOptions.map((quantity) => (
                      <MenuItem key={quantity} value={quantity}>
                        {quantity}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button
                    sx={{
                      color: "black",
                      pointerEvents: "none",
                      textTransform: "lowercase",
                    }}
                  >
                    of {card.quantity}
                  </Button>

                  <Button
                    variant={"contained"}
                    onClick={handleAddToCart}
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      "&:hover": { backgroundColor: "darkgreen" },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              ) : (
                <Button variant={"outlined"} disabled>
                  Out of Stock
                </Button>
              )}
            </Card>
          </Stack>
        </Stack>
      </p>
    </div>
  );
}

export default SingleCard;
