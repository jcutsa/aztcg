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
import axios from "axios";
import defaultImage from "../assetts/images/card1.jpg";

// import cards from "../assetts/CardsData";

function SingleCard({ setUser, loggedIn }) {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${cardId}`)
      .then((response) => {
        const cardData = response.data;
        const formattedCard = {
          name: cardData.name,
          brand: cardData.card_type.name,
          image: cardData.image_url || defaultImage,
          price: cardData.price,
          inStock: cardData.quantity_on_hand > 0,
          quantity: cardData.quantity_on_hand,
          id: cardData.id.toString(),
        };
        setCard(formattedCard);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cardId]);

  const handleAddToCart = () => {
    const newItem = {
      name: card.name,
      brand: card.brand,
      image: card.image,
      price: card.price,
      maxQuantity: card.quantity,
      quantitySelected: selectedQuantity,
      id: card.id,
      totalPrice: card.price * selectedQuantity,
    };
    setUser((prevUser) => ({
      ...prevUser,
      cart: [...prevUser.cart, newItem],
    }));
    console.log(
      `Added ${selectedQuantity} ${card.name} to cart // Card id: ${card.id}`
    );
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
            {!loggedIn ? (
              <Typography>
                Please sign in to view stock and add to cart
              </Typography>
            ) : (
              <Card sx={{ padding: "24px" }}>
                <Stack direction={"column"}>
                  <h3>${card.price?.toFixed(2)}</h3>
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
            )}
          </Stack>
        </Stack>
      </p>
    </div>
  );
}

export default SingleCard;
