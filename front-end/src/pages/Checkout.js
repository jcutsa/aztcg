import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import Review from "../components/Review";

import { useState } from "react";

// Need to clear the cart when order is submitted
// Need to get the form data, eventually pass it to the backend api
// Also need to display data on the review page
// It would be nice to prevent moving forward if no input has been entered
// As of now, no form has validation

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme({
    palette: {
        primary: {
            main: "#5FD068",
        },
    },
});

export default function Checkout({ user, setUser }) {
    const [orderDetails, setOrderDetails] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        cardName: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
    });

    const [activeStep, setActiveStep] = React.useState(0);
    const [totalWithTax, setTotalWithTax] = useState(0);

    const handleChange = (event) => {
        setOrderDetails({
            ...orderDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);

        // Order submitted
        if (activeStep === steps.length - 1) {
            const orderItems = user.cart.map((item) => ({
                product_id: item.id,
                quantity: item.quantitySelected,
            }));

            const order = {
                user_id: user.id,
                total: totalWithTax,
                date: getDateandTime(),
                shipped: false,
                items: orderItems,
            };

            // Create the order
            fetch(`http://localhost:8080/api/order/create`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            });

            // Clear cart and total
            setUser({
                ...user,
                total: 0,
                cart: [],
            });
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const getDateandTime = () => {
        const today = new Date();
        const date =
            today.getFullYear() +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getDate();
        const time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        const formattedString = date + " " + time;
        return formattedString;
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <AddressForm value={orderDetails} onChange={handleChange} />
                );

            case 1:
                return (
                    <PaymentForm value={orderDetails} onChange={handleChange} />
                );
            case 2:
                return (
                    <Review
                        value={orderDetails}
                        user={user}
                        setUser={setUser}
                        setTotalWithTax={setTotalWithTax}
                    />
                );
            default:
                throw new Error("Unknown step");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === steps.length ? (
                        <React.Fragment>
                            {/* This is displayed when you place an order
                             */}
                            {/*handleSubmit*/}
                            <Typography variant="h5" gutterBottom>
                                Order has been placed.
                            </Typography>
                            <Typography variant="subtitle1">
                                We have emailed your order confirmation, and
                                will send you an update when your order has
                                shipped.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBack}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1
                                        ? "Place order"
                                        : "Next"}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
