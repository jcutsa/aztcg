import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const options = ["All", "Yu-Gi-Oh!", "Magic", "Pokemon", "Digimon"];

const DropdownMenu = ({selectedOption, setSelectedOption}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <>
      <Button
        style={{
          marginRight: "0.5rem",
          color: "black",
          backgroundColor: "#f5f5f5",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          padding: "12px 16px",
          width: "125px"
        }}
        onClick={handleClick}
      >
        {selectedOption}
      </Button>
      <Menu
        sx={{ marginTop: "10px" }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleOptionClick(option)}
            selected={option === selectedOption}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
