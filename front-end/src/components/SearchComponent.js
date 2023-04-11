import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DropdownMenu from "./DropdownMenu";
import cards from "../assetts/CardsData";
import { Autocomplete, TextField } from "@mui/material";

const options = ["All", "Yu-Gi-Oh!", "Magic"];

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 400,
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
  const [cardNames, setCardNames] = useState("none");
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const navigate = useNavigate(); // add this line

  // ...

  const handleCardSelection = (event, targetName) => {
    let foundCards = cards.filter((c) => c.name === targetName);
    console.log(foundCards);
    if (foundCards.length > 0) {
      let value = foundCards[0].id;
      navigate(`/card/${value}`);
    }
  };

  useEffect(() => {
    if (selectedOption === "All") {
      setCardNames(cards.map((card) => card.name));
    } else {
      filterCards(selectedOption);
    }
  }, [selectedOption]);

  const filterCards = (targetBrand) => {
    let foundCards = cards.filter((c) => c.brand === targetBrand);
    let cardNames = foundCards.map((c) => c.name);
    setCardNames(cardNames);
  };
  return (
    <StyledPaper>
      <DropdownMenu
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cardNames}
        sx={{ width: 300 }}
        onChange={handleCardSelection} // add this line
        renderInput={(params) => (
          <TextField {...params} label="Search for Product..." />
        )}
      />
    </StyledPaper>
  );
}
