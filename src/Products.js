import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { ProductContext } from "./ProductContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

function Products() {
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(" ");
  const [image, setImage] = useState(" ");
  console.log([name, quantity, image]);

  const clearFields = () => {
    setName("");
    setQuantity("");
    setImage("");
  };

  const classes = useStyles();
  return (
    <ProductContext.Consumer>
      {({ products, setProducts }) => (
        <Grid
          container
          justifyContent="center"
          alignItems="flex-end"
          spacing={1}
        >
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              <Box mb={5}>Name:</Box>
              <Box mt={5}>Quantity:</Box>
              <Box mt={4}>Image:</Box>
              <Box mt={2}>
                <Button
                  onClick={() => {
                    setProducts(name, quantity, image);
                    clearFields();
                  }}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Add
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid container direction="row" item xs={2}>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="Product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="quantity"
                  label="Product quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden onChange={(e) => {
                    console.log({e})
                    return setImage(e.target.value)}
                  }
                  
                  />
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      )}
    </ProductContext.Consumer>
  );
}

export default Products;
