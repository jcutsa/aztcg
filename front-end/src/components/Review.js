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

export default function Review({ value, user }) {
    const [discountCodes, setDiscountCodes] = useState([]);
    const [codeInput, setCodeInput] = useState("");
    //const [validCode, setValidCode] = useState({});
    //const [subtotal, setSubtotal] = useState(user.total);
    //console.log(user.total);

    let subtotal = user.total;
    let tax = Number((subtotal * 0.0825).toFixed(2));
    let totalPrice = (subtotal + tax).toFixed(2);

    // Get a list of all valid discount codes
    useEffect(() => {
        fetch("http://localhost:8080/api/discount/getAll")
            .then((response) => response.json())
            .then((data) => {
                setDiscountCodes(data);
            });
    }, []);

    // Searches code list for a matching code.
    const handleDiscountSubmit = (e) => {
        const searchCode = discountCodes.filter((e) => e.name === codeInput);
        if (searchCode.length > 0) {
            alert(searchCode[0].percentage + "% discount has been applied!");
            //setValidCode(searchCode[0]);
            let discount = (searchCode[0].percentage / 100) * subtotal;
            //setSubtotal(subtotal - discount);
            subtotal -= discount;
            alert(subtotal);
            e.currentTarget.disabled = true;
        } else {
            alert(codeInput + " is not a valid discount code!");
            //setValidCode({});
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
                {user.cart.map((item) => (
                    <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                            primary={item.name}
                            secondary={item.brand}
                        />
                        <Typography variant="subtitle2" sx={{ mr: 3 }}>
                            ${Number(item.price).toFixed(2)} x{" "}
                            {item.quantitySelected} :
                        </Typography>
                        <Typography variant="body2">
                            ${Number(item.totalPrice).toFixed(2)}
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
