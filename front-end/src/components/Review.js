import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

// Can probably hardcode the tax value in here
// Add discount code entry text box
// Does the API call to verify the discount code live here or in Checkout?

const products = [
    {
        name: "Product 1",
        desc: "A nice thing",
        price: "9.99",
        quantity: 1,
    },
    {
        name: "Product 2",
        desc: "Another thing",
        price: "3.45",
        quantity: 1,
    },
    {
        name: "Product 3",
        desc: "Something else",
        price: "6.51",
        quantity: 1,
    },
    {
        name: "Product 4",
        desc: "Best thing of all",
        price: "14.11",
        quantity: 1,
    },
];

let subtotal = Number(
    products
        .reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0)
        .toFixed(2)
);

let tax = Number((subtotal * 0.0825).toFixed(2));
let totalPrice = (subtotal + tax).toFixed(2);

export default function Review({ value }) {
    const [discountCodes, setDiscountCodes] = useState([]);
    const [codeInput, setCodeInput] = useState("");
    const [validCode, setValidCode] = useState({});

    // Get a list of all valid discount codes
    useEffect(() => {
        fetch("http://localhost:8080/api/discount/getAll")
            .then((response) => response.json())
            .then((data) => {
                setDiscountCodes(data);
            });
    }, []);

    // Searches code list for a matching code.
    const handleDiscountSubmit = () => {
        const searchCode = discountCodes.filter((e) => e.name === codeInput);
        if (searchCode.length > 0) {
            let percentage = searchCode[0].percentage * 100.0;
            alert(percentage + "% discount has been applied!");
            setValidCode(searchCode[0]);
            //subtotal *= 1 - validCode.percentage;
        } else {
            alert(codeInput + " is not a valid discount code!");
            setValidCode({});
        }
    };

    let addresses = Object.entries(value)
        .slice(2, 8)
        .map((entry) => entry[1]);
    addresses = addresses.filter(function (e) {
        return e;
    });

    // Going to need to add some form of validation for the card number and expiration date
    let hiddenCardNumber = "xxxx-xxxx-xxxx-".concat(
        value.cardNumber.substring(value.cardNumber.length - 4)
    );
    const payments = [
        { name: "Card holder", detail: value.cardName },
        { name: "Card number", detail: hiddenCardNumber },
        { name: "Expiry date", detail: value.expiration },
    ];

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                            primary={product.name}
                            secondary={product.desc}
                        />
                        <Typography variant="body2">
                            ${product.price}
                        </Typography>
                    </ListItem>
                ))}
                <Divider sx={{ my: 1 }} />

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Discount Code" />
                    <TextField
                        sx={{ width: 100, mr: 1 }}
                        id="discount"
                        name="discount"
                        variant="outlined"
                        size="small"
                        onChange={(v) =>
                            setCodeInput(v.target.value.toUpperCase())
                        }
                    />
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleDiscountSubmit}
                    >
                        Submit
                    </Button>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Subtotal" />
                    <Typography variant="body2">${subtotal}</Typography>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Tax" />
                    <Typography variant="body2">${tax}</Typography>
                </ListItem>

                <Divider sx={{ my: 1 }} />

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>
                        {value.firstName} {value.lastName}
                    </Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.detail}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
