import { Button, ButtonGroup, Paper, Container, Grid } from "@mui/material";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const pages = ["Products", "Pricing", "Blog"];

const linkStyle = {
    marginRight: "1rem",
    textDecoration: "none",
    color: "white",
};

function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/product/getAll")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    console.log(products);

    const remove = async (id) => {
        await fetch(`http://localhost:8080/api/product/delete/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(() => {
            let updatedProducts = [...products].filter((i) => i.id !== id);
            setProducts(updatedProducts);
        });
    };

    const productList = products.map((product) => {
        const link = "/admin-product-edit/" + product.id;
        return (
            <TableRow key={product.id} className="Table-row">
                <TableCell component="th" scope="row">
                    {product.name}
                </TableCell>
                <TableCell align="right">{product.rarity}</TableCell>
                <TableCell align="right">{product.quantity_on_hand}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                    <ButtonGroup>
                        <Button
                            size="small"
                            color="success"
                            variant="contained"
                            href={link}
                            sx={{ mr: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            variant="contained"
                            onClick={() => remove(product.id)}
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        );
    });

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container justifyContent="flex-end">
                <Button
                    variant="contained"
                    href="/admin-product-edit/new"
                    color="success"
                >
                    Add Product
                </Button>
            </Grid>
            <h1>Product List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="Table-header">
                        <TableRow>
                            <TableCell
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Name
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Rarity
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Quantity
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Price
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{productList}</TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default AdminProducts;
