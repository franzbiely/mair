import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ProductContext } from "./ProductContext";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

function CategoryForm() {
  
  const classes = useStyles();
  return (
    <ProductContext.Consumer>
      {({ categories, addCategory, category, setCategory, clearText, saveEditCategory, i }) => (
        <Grid item xs={12}>
          <div>
            <h1>Category</h1>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="category"
                label="Category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </form>
            <Box ml={-15} >
            <Button
              onClick={() => {
                addCategory(category);
                clearText();
              }}
              variant="contained"
              color="Secondary"
              className={classes.button}
            >
              add category
            </Button>
            </Box>
            <Box ml={17} mt={-4.5}  >
            <Button
              onClick={() => {
                saveEditCategory(i);
                clearText();
              }}
              variant="contained"
              color="Secondary"
              className={classes.button}
            >
              update 
            </Button>
            </Box>
          </div>
        </Grid>
      )}
    </ProductContext.Consumer>
  );
}

export default CategoryForm;
