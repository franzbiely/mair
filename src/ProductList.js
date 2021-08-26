import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { ProductContext } from "./ProductContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductList() {
  const classes = useStyles();

  return (
    <ProductContext.Consumer>
      {({ products, setProducts }) => {
        const totalProducts = products.map((product) => {
          return parseInt(product.quantity);
        });
        const total = [products.quantity].reduce(function (name, quantity) {
          return name, quantity;
        });
        console.log("total is : " + total);

        console.log({ totalProducts });
        return (
          <Grid item xs={12}>
            <h1>Product List</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Box ml={10}>
                        {" "}
                        <b>id</b>{" "}
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <b>Product Name</b>
                    </TableCell>
                    <TableCell align="right">
                      <Box mr={10}>
                        {" "}
                        <b>Product Quantity</b>{" "}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        <Box ml={10}>{row.id} </Box>
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">
                        <Box mr={16}> {row.quantity} </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        );
      }}
    </ProductContext.Consumer>
  );
}
