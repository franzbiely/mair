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
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// console.log("===== PLAYGROUND =========");
// const x = [1, 2, 3];
// // Reduce - mu retrun ug value na isa nalang ang value based sa X;
// // . e.g. : [n]
// // const z = x.reduce((previous, current) => {
// //   return previous + current
// // })
// // console.log({z})
// // [6]

// console.log("===== /PLAYGROUND =========");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    maxHeight: 380,
  },
  tableRow: {
    height: 50,
  },
});

export default function ProductList() {
  const classes = useStyles();

  return (
    <ProductContext.Consumer>
      {({ products, setProducts, deleteProduct, editProduct }) => {
        if (products.length < 1) {
          return;
        }

        const totalProducts = products
          .map((product) => {
            return parseInt(product.quantity);
          })
          .reduce(function (prev, current) {
            return prev + current;
          });

        // console.log("total is : " + total);
        // console.log({ totalProducts });
        return (
          <Grid item xs={12}>
            <h1>Product List</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Box ml={10}>
                            {" "}
                            <b>Id</b>{" "}
                           
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <b>Product Name</b>
                        </TableCell>
                        <TableCell align="left">
                          <b>Image</b>
                        </TableCell>
                        <TableCell align="right">
                          <Box mr={10}>
                            {" "}
                            <b>Product Quantity</b>{" "}
                          </Box>
                        </TableCell>
                        <TableCell align="left">
                          <b>Edit</b>
                        </TableCell>
                        <TableCell align="left">
                          <b>Delete</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products?.map((row, i) => (
                        <TableRow key={row.id} className={classes.tableRow}>
                          <TableCell component="th" scope="row">
                            <Box ml={10}>{row.id} </Box>
                          </TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">
                            <img
                              src={"file://" + row.image}
                              width="75px"
                              height="40px"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Box mr={16}> {row.quantity} </Box>
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              onClick={() => {
                                editProduct(i);
                              }}
                            >
                              <EditIcon style={{ color: "blue" }} />
                            </Button>
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              onClick={() => {
                                deleteProduct(i);
                              }}
                            >
                              <DeleteIcon style={{ color: "red" }} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>

                    <TableBody>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">
                          <b>Total of Products</b>
                        </TableCell>
                        <TableCell></TableCell>

                        <TableCell align="right">
                          <Box mr={16}>
                            <h2>{totalProducts}</h2>
                          </Box>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Table>
            </TableContainer>
          </Grid>
        );
      }}
    </ProductContext.Consumer>
  );
}
