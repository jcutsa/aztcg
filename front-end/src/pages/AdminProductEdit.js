import React, {useEffect, useState, Component } from 'react';

import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import Container from "@mui/material/Container";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";


const cardtypes = [
  {
    value: '1',
    label: 'POKEMON',
  },
  {
    value: '2',
    label: 'YUGIOH',
  },
  {
    value: '3',
    label: 'DIGIMON',
  },
  {
    value: '4',
    label: 'MAGIC',
  }
];

let coru = 0;

export default function AdminProducts() {

  const queryParameters = new URLSearchParams(window.location.search);
  const id_get = Number(queryParameters.get('id'));
  console.log("ID:", id_get);

  const [product, setProduct] = useState({});
  const [cardTypeId, setcardtypeid] = useState();


  const [upid, setid] = useState("");
  const [upname, setname] = useState("");
  const [updescription, setdescription] = useState("");
  const [upquantity_on_hand, setquantity_on_hand] = useState("");
  const [upprice, setprice] = useState("");
  const [uprarity, setrarity] = useState("");
  const [upimage, setimage] = useState("");

  useEffect(() => {
    if (id_get) {
      fetch(`http://localhost:8080/api/product/${id_get}`)
        .then((response) => response.json())
        .then((product) => setProduct(product))
    }
    setid(product.id);
    setname(product.name);
    setdescription(product.description);
    setquantity_on_hand(product.quantity_on_hand);
    setprice(product.price);
    setrarity(product.rarity);
    /////IDK
    setcardtypeid(product.card_type);
    console.log(String(cardTypeId));
    ///////REALLY
    setimage(product.image_url);
    }, upid);

  function updateProductDetails(upname,updescription,upprice,upquantity_on_hand,upimage,uprarity) {
    const product = {
      id: upid,
      card_key: 'test',
      name: upname,
      description: updescription,
      card_type_id: '',
      quantity_on_hand: upquantity_on_hand,
      price: upprice,
      image: upimage,
      rarity: uprarity,
    };
    axios
      .put("http://localhost:8080/api/product/update", product)
      .then((response) => {
        console.log(response.data);
        console.log(typeof response.data.active);
        setDiscountData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    function handleCreateProduct(upname,updescription,upprice,upquantity_on_hand,upimage){
      console.log("CREATE: ",upname,updescription,upprice, upquantity_on_hand,upimage);
      const product = {
        name : "Blastoise",
        description : "Blue, Cannon",
        card_type : 1,
        quantity_on_hand : 5,
        price : "5.00",
        rarity : "Common",
        image_url : "https://i0.wp.com/pkmncards.com/wp-content/uploads/blastoise-base-set-bs-2.jpg?fit=600%2C825&ssl=1",
        /*
        name : "Blastoise",
        description : "Blue, Cannon",
        card_type : 1,
        quantity_on_hand : 5,
        price : "5.00",
        rarity : "Common",
        image_url : "https://i0.wp.com/pkmncards.com/wp-content/uploads/blastoise-base-set-bs-2.jpg?fit=600%2C825&ssl=1",
        */
      };
      console.log("");
      axios
        .post("http://localhost:8080/api/product/create", product)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      };

  const title = <h2>{upid ? 'Edit Product' : 'Create Product'}</h2>;
  coru = upid ? 1 : 0;

  return (
    <div
      style={{
      padding: "24px",
      textAlign: "center",
      height: "100vh",
      backgroundColor: "#F6FBF4",
      backgroundSize: "cover",
      }}
    >
      {coru === 1 ?
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
            title
          }
          <div style={{padding: "20px",}}></div>
          <Stack direction="column" spacing={4}>
          <TextField
            required
            InputLabelProps={{ shrink: true }}
            id="standard-required"
            variant="standard"
            color="success"
            label= "Card Name"
            defaultValue={product.name}
            value={upname}
            onChange={(e) => {setname(e.target.value)}}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Description"
            InputLabelProps={{ shrink: true }}
            multiline
            maxRows={4}
            variant="standard"
            color="success"
            defaultValue={product.description}
            value={updescription}
            onChange={(e) => setdescription(e.target.value)}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            id="standard-required"
            variant="standard"
            color="success"
            label= "Card Rarity"
            defaultValue={product.rarity}
            value={uprarity}
            onChange={(e) => {setrarity(e.target.value)}}
          />
          <FormControl fullWidth sx={{ m: 1 }} variant="standard" color="success">
            <InputLabel htmlFor="standard-adornment-amount">Cost Of Card</InputLabel>
            <Input
              InputLabelProps={{ shrink: true }}
              defaultValue={product.price}
              value={upprice}
              onChange={(e) => setprice(e.target.value)}
              id="standard-adornment-amount"                
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <TextField
            id="standard-number"
            InputLabelProps={{ shrink: true }}
            label="Amount Of Card/s Available"
            type="number"
            color="success"
            defaultValue={product.quantity_on_hand}
            value={upquantity_on_hand}
            onChange={(e) => setquantity_on_hand(e.target.value)}
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            InputLabelProps={{ shrink: true }}
            label="Image URL"
            variant="standard"
            color="success"
            defaultValue={product.image_url}
            value={upimage}
            onChange={(e) => setimage(e.target.value)}
          />
          <div style={{padding: "5px",}}></div>
              <Button variant="outlined" color='success'
                onClick={() => {
                  updateProductDetails(
                    upname,
                    updescription,
                    upprice,
                    upquantity_on_hand,
                    upimage,
                    uprarity
                  );
                }}
              >
                Update
              </Button>
        </Stack>
        <div style={{padding: "40px",}}></div>
      </Container>
      </Card>

      : ////CREATE/////

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
      title
    }
    <div style={{padding: "20px",}}></div>
    <Stack direction="column" spacing={4}>
      <TextField
        required
        id="standard-required"
        variant="standard"
        InputLabelProps={{ shrink: true }}
        color="success"
        label= "Card Name"
        value={upname}
        onChange={(e) => {setname(e.target.value)}}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Description"
        InputLabelProps={{ shrink: true }}
        multiline
        maxRows={4}
        variant="standard"
        color="success"
        value={updescription}
        onChange={(e) => setdescription(e.target.value)}
      />
      <FormControl fullWidth sx={{ m: 1 }} variant="standard" color="success">
        <InputLabel htmlFor="standard-adornment-amount">Cost Of Card</InputLabel>
        <Input
          InputLabelProps={{ shrink: true }}
          value={upprice}
          onChange={(e) => setprice(e.target.value)}
          id="standard-adornment-amount"                
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <TextField
        id="standard-number"
        label="Amount Of Card/s Available"
        InputLabelProps={{ shrink: true }}
        type="number"
        color="success"
        value={upquantity_on_hand}
        onChange={(e) => setquantity_on_hand(e.target.value)}
        variant="standard"
      />
      <TextField
        id="standard-required"
        InputLabelProps={{ shrink: true }}
        label="Image URL"
        variant="standard"
        color="success"
        value={upimage}
        onChange={(e) => setimage(e.target.value)}
      />
      <div style={{padding: "5px",}}></div>
          <Button variant="outlined" color='success'
            onClick={() => {
              handleCreateProduct(
                upname,
                updescription,
                upprice,
                upquantity_on_hand,
                upimage
              );
            }}
          >
            Create
          </Button>
    </Stack>
    <div style={{padding: "40px",}}></div>
  </Container>
  </Card>
      }
    </div>
  )
}
  