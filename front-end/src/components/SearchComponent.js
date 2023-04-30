import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DropdownMenu from "./DropdownMenu";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
  margin: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export default function SearchComponent() {
  const [cardNames, setCardNames] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  const [options, setOptions] = useState([]);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const handleCardSelection = (event, targetName) => {
    let foundCards = cards.filter((c) => c.name === targetName);
    console.log(foundCards);
    if (foundCards.length > 0) {
      let value = foundCards[0].id;
      navigate(`/card/${value}`);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product/getAll")
      .then((response) => {
        const cards = response.data;
        setCards(cards); // store response data in cards state variable
        setOptions(getUniqueBrands(cards));
        if (selectedOption === "All") { // change the default selected option to "All"
          setCardNames(cards.map((card) => card.name));
        } else {
          filterCards(selectedOption);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedOption]);

  const getUniqueBrands = (cards) => {
    const brands = new Set(cards.map((card) => card.card_type.name));
    return ["All", ...brands];
  };

  const filterCards = (targetBrand) => {
    let foundCards = cards.filter((c) => c.card_type.name === targetBrand);
    let cardNames = foundCards.map((c) => c.name);
    setCardNames(cardNames);
  };

  return (
    <StyledPaper>
      <DropdownMenu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cardNames}
        sx={{ width: 500 }}
        onChange={handleCardSelection}
        renderInput={(params) => (
          <TextField
            {...params}
            label={params.inputProps.value ? "" : "Search for Product..."}
            InputLabelProps={{ shrink: false }}
          />
        )}
      />
    </StyledPaper>
  );
}
