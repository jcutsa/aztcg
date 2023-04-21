import React, {useEffect, useState} from 'react';

import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import Container from "@mui/material/Container";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
//import image from "../assetts/images/duotone.png"; 


///Look at CreateOrUpdate function to change from Create nad Update

  const cardtypes = [
    {
      value: '0',
      label: 'Pokemon',
    },
    {
      value: '1',
      label: 'Yugioh',
    },
    {
      value: '2',
      label: 'Digimon',
    },
    {
      value: '3',
      label: 'Magic',
    }
  ];

  const cardrarity = [
    {
      value: '0',
      label: 'Common',
    },
    {
      value: '1',
      label: 'Uncommon',
    },
    {
      value: '2',
      label: 'Rare',
    },
    {
      value: '3',
      label: 'Rare Holo',
    }
  ];

  let coru = 0;
  let array = [];

function CreateOrUpdate()
{
  if (false) //Value sent by admin product for now: true(Update, will auto fill with values below), false(Create)
  {         //Reload page when changing this value

    coru = 1; //set value to help evaluate how page should look
    return [1,2,{value: '0', label: 'Pokemon'},4,5,{value: '3', label: 'Rare Holo',}]; // return product array created from product id
  }
  else
  {
    coru = 0; //set value to help evaluate how page should look
    return ["","",{value: "", label: ""},"","",{value: "", label: ""}]; // return defult array
  }
}

export default function AdminProducts() {

  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState(cardtypes);
  const [rarityValue, setRarityValue] = React.useState("");
  const [rarity_options, setRarityOptions] = React.useState(cardrarity);

  //console.log(coru)
  //console.log(array)

  array = CreateOrUpdate(); //return product array or default array

  //console.log(coru)
  //console.log(array)
  
  return (
    <div
      style={{
      padding: "24px",
      textAlign: "center",
      height: "100vh",
      backgroundColor: "#F6FBF4",
      //backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      //backgroundImage: "url('https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/Magic-Yu-Gi-Oh-and-Pokemon-TCG.png')"
      }}
    >
        <Card 
          elevation={23}
          style={{
            backgroundColor: "#F6FBF4",
            maxWidth:"500px",
            margin:'auto',
            flexDirection: 'column'
          }}
        >
      <Container component="main" maxWidth="sm">
        <div style={{padding: "20px",}}></div>
        {
            coru == 0
            ? <h2>Create A New Product</h2>
            : <h2>Update This Product</h2>
          }
        <div style={{padding: "20px",}}></div>
        <Stack direction="column" spacing={4}>
          <TextField
            required
            id="standard-required"
            label="Card Name"
            variant="standard"
            color="success"
            defaultValue= {array.at(0)}

          />
          <TextField
            id="standard-multiline-flexible"
            label="Card Discription"
            multiline
            maxRows={4}
            variant="standard"
            color="success"
            defaultValue= {array.at(1)}
          />
          <Autocomplete
            options={options}
            noOptionsText="Press Enter To Add New Card Type"
            defaultValue= {array.at(2)}
            //defaultValue= {{value: '0', label: 'Pokemon',}}
            getOptionLabel={(option) => option.label}
            onInputChange={(e, newValue) => {
                setInputValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params} 
                label="Card Type"
                variant="standard"
                color="success"
                onKeyDown={(e) => {
                if 
                (
                  e.key === "Enter" &&
                  options.findIndex((o) => o.label === inputValue) === -1
                ) {
                  setOptions((o) => o.concat({ label: inputValue }));
                }
                }}
              />
            )}
          />
          <TextField
            id="standard-number"
            label="Amount Of Card/s Available"
            type="number"
            color="success"
            defaultValue= {array.at(3)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <FormControl fullWidth sx={{ m: 1 }} variant="standard" color="success">
            <InputLabel htmlFor="standard-adornment-amount">Cost Of Card</InputLabel>
            <Input
              defaultValue= {array.at(4)}
              id="standard-adornment-amount"                
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <Autocomplete
            options={rarity_options}
            noOptionsText="Press Enter To Add New Card Rarity"
            defaultValue= {array.at(5)}
            //defaultValue= {{value: '3', label: 'Rare Holo',}}
            getOptionLabel={(option) => option.label}
            onInputChange={(e, newValue) => {
                setInputValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params} 
                label="Card Rarity"
                variant="standard"
                color="success"
                onKeyDown={(e) => {
                if 
                (
                  e.key === "Enter" &&
                  options.findIndex((o) => o.label === inputValue) === -1
                ) {
                  setRarityOptions((o) => o.concat({ label: inputValue }));
                }
                }}
              />
            )}
          />
          <div style={{padding: "5px",}}></div>
          {
            coru == 0
            ? <Button variant="outlined" color='success'>Create</Button>
            : <Button variant="outlined" color='success'>Update</Button>
          }
        </Stack>
        <div style={{padding: "40px",}}></div>
      </Container>
      </Card>
    </div>
  );
}
  